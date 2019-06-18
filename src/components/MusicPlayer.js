import React from 'react';
import styled from 'styled-components/macro';
import MessageHandler from '../common/MessageHandler';

const PlayerView = styled.div`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  font-family:'Source Sans Pro','Courier New','Courier',monospace;
`;

class MusicPlayer extends React.Component {
  audio = new Audio();
  status = null;
  textSpace = 10;
  playlist = new Array("1599488");
  playingIndex = 0;
  waittingForPlay = false;
  recoveryProgressHandled = false;
  _DEBUG = false;

  playerEvents = {
    error: () => {
      this.status.textContent = "bgm: error " + this.audio.error.code;
    },
    canplay: () => {
      if (this.waittingForPlay) this.callPlay();
    },
    play: () => {
      this.waittingForPlay = false;
      this.status.textContent = "bgm: play";
    },
    playing: () => {
      this.status.textContent = "#";
      if (!this.recoveryProgressHandled) {
        this.recoveryProgress();
      }
      const progressLoop = setInterval(() => {
        if (this.status.textContent.substr(0, 1) !== "#") {
          clearInterval(progressLoop);
          return;
        }
        this.status.textContent = this.getProgressText();
        this.saveProgressInfo();
      }, 300);
    },
    progress: () => {
      if ((!this.isAnimating()) && this.audio.readyState < 4) {
        this.showAnimating();
      }
    },
    pause: () => {
      this.status.textContent = "bgm: pause";
    },
    waiting: () => {
      if (!this.isAnimating()) {
        this.showAnimating();
      }
    },
    ended: () => {
      this.status.textContent = "bgm: ended";
      this.saveProgressInfo();
      this.playNext();
    }
  }

  constructor(props) {
    super(props);
    if (this._DEBUG) {
      for (const i in this.playerEvents) {
        this.playerEvents['_' + i] = this.playerEvents[i];
        this.playerEvents[i] = () => {
          console.log(`bgm: event[${i}]`);
          this.playerEvents['_' + i]();
        }
      }
    }
  }

  loadPlaylist() {
    return new Promise((resolve, reject) => {
      const url = process.env.PUBLIC_URL + "/playlist.json";
      fetch(url)
        .then(res => res.json())
        .then(
          result => {
            const list = result.result.tracks;
            for (const i in list)
              this.playlist.push(list[i].id);
            resolve(result);
          },
          error => {
            MessageHandler.log(error);
            reject(error);
          }
        );
    });
  }

  playByIndex(index) {
    if (index >= this.playlist.length || index < 0) {
      MessageHandler.log(`Playlist[${index}] not exists. `);
      return;
    }
    this.playingIndex = index;
    const url = "https://music.163.com/song/media/outer/url?id=" + this.playlist[index] + ".mp3";
    this.audio.src = url;
    if (window.sessionStorage)
      sessionStorage.music_playingIndex = index;
    this.waittingForPlay = true;
  }

  playNext() {
    const nextIndex = parseInt(this.playingIndex) + 1;
    if (nextIndex < this.playlist.length) {
      this.playByIndex(nextIndex);
    }else{
      this.playByIndex(0);
    }
  }

  saveProgressInfo() {
    if (!window.sessionStorage) return;
    if (this.audio.ended) {
      sessionStorage.music_currentTime = 0;
    }else{
      sessionStorage.music_currentTime = this.audio.currentTime;
    }
  }

  recoveryProgress() {
    this.recoveryProgressHandled = true;
    if (!window.sessionStorage) return;
    if (sessionStorage.music_currentTime) {
      this.audio.currentTime = sessionStorage.music_currentTime;
    }
    if (sessionStorage.music_paused === "paused") {
      this.audio.pause();
    }
  }

  getTextSpace = () => {
    const span = document.createElement("span");
    span.style.visibility = "hidden";
    this.status.parentNode.appendChild(span);
    const containerStyle = getComputedStyle(this.status.parentNode);
    for (span.textContent = "#";
      this.status.parentNode.offsetWidth - 
        (parseFloat(containerStyle.paddingLeft) + parseFloat(containerStyle.paddingRight))
         > span.getBoundingClientRect().width;
      span.textContent += "#");
    this.textSpace = span.textContent.length - 1;
    this.status.parentNode.removeChild(span);
  }

  getProgressText() {
    const width = this.textSpace;
    const count = Math.round(this.audio.currentTime / this.audio.duration * width);
    let s;
    for (s = "#"; s.length < count; s += "#");
    for (; s.length < width; s += "=");
    return s;
  }

  isAnimating() {
    return this.status.textContent.substr(0, 1) === ">";
  }

  showAnimating() {
    this.status.textContent = ">";
    const processLoop = setInterval(() => {
      if (!this.isAnimating()) {
        clearInterval(processLoop);
        return;
      }
      if (this.status.textContent.length >= this.textSpace) {
        this.status.textContent = "";
      }
      this.status.textContent += ">";
    }, 200);
  }

  callPlay() {
    const playPromise = this.audio.play();
    if (playPromise === undefined) return;
    playPromise.then(_ => {
      MessageHandler.log("bgm", "play started");
    })
    .catch(error => {
      if (error.name !== "NotAllowedError") {
        MessageHandler.log("bgm", "play interruped: " + error);
      }
    });
  }

  handleClick = () => {
    if (this.audio.paused || this.audio.currentTime === 0) {
      if (window.sessionStorage)
        sessionStorage.music_paused = null;
      if (this.audio.src) this.callPlay();
    }else{
      if (window.sessionStorage) {
        sessionStorage.music_paused = "paused";
      }
      this.audio.pause();
    }
  }

  render() {
    return (
      <PlayerView>
        <span className='status' ref={dom => this.status = dom} onClick={this.handleClick}>music..</span>
      </PlayerView>
    )
  }

  componentDidMount() {
    this.getTextSpace();
    window.addEventListener("resize", this.getTextSpace);
    for (const i in this.playerEvents)
      this.audio.addEventListener(i, this.playerEvents[i]);
    this.loadPlaylist().then(() => {
      MessageHandler.log("bgm", "playlist loaded");
      console.log(this.playlist);
      if (window.sessionStorage && sessionStorage.music_playingIndex) {
        this.playByIndex(sessionStorage.music_playingIndex);
      }else{
        this.playByIndex(0);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getTextSpace);
    for (const i in this.playerEvents)
      this.audio.removeEventListener(i, this.playerEvents[i]);
  }
}

export default MusicPlayer;
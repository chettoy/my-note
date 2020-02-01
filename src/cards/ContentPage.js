import React from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import DOMPurify from 'dompurify';
import marked from 'marked';
import CardView from '../components/CardView';

const ConView = styled.div`
  margin-top: 3.125rem;
  padding: 1rem 0;
  
  h1 {
    font-size: 1.5em;
  }
  a.con-preview {
    color: #2196f3;
    font-size: 1.5em;
  }
  blockquote {
    margin: 0;
    padding: 0.3rem 0.5rem;
    border-left: 0.25rem solid #0c0;
    background: #f5f2f0;
  }
`;

const ConCard = styled(CardView)`
  width: 40rem;
  max-width: 100%;
  @media screen and (min-width: 100rem) {
    width: 50rem;
  }
  overflow: auto;
  iframe, video, img {
    max-width: 100%;
    height: auto;
  }
`;

class ConData {
  constructor(arg1, arg2) {
    this.__id = null;
    this.__content = null
    this.__html = null;
    this.__title = null;
    if (arg2) {
      this.__initFromCon(arg1, arg2);
    }else{
      this.__parseFromJSON(arg1);
    }
  }
  
  __initFromCon(id, con) {
    this.__id = id;
    this.__content = con;
    const r1 = /^(-{3,})\n((\w+): ([\S\s]*?)\n)+\1\n\n/.exec(con);
    if (r1 != null && r1.length > 1) {
      const lines = r1[0].split("\n");
      const r2 = /^(\w+): (['"]?)([\S\s]*)\2$/;
      const map = new Map();
      let item;
      for (let i = 1; i < (lines.length - 3); i++) {
        item = r2.exec(lines[i]);
        if (item && item.length > 3) {
          map.set(item[1], item[3]);
        }
      }
      if (map.has("title")) {
        this.__title = map.get("title");
      }
      this.__html = marked(con.substr(r1[0].length));
    }else{
      this.__html = marked(con);
      const r = /<h1[\s\S]*>([\s\S]*)<\/h1>/.exec(this.__html);
      if (r != null && r.length > 1) {
        this.__title = r[1];
      }
    }
  }
  
  __parseFromJSON(data) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    if (!('id' in data && 'con' in data && 'html' in data)) {
      console.log(data);
      throw new Error('invalid ConData json');
    }
    this.__id = data.id;
    this.__content = data.con;
    this.__html = data.html;
    if (data.title) this.__title = data.title;
  }

  getState() {
    const stateVals = {
      id: this.__id,
      con: this.__content,
      html: this.__html,
      title: this.__title
    }
    return stateVals;
  }
  toString() {
    return JSON.stringify(this.getState());
  }

  getHtml() {
    return this.__html;
  }
  getId() {
    return this.__id;
  }
  getSource() {
    return this.__content;
  }
  getTitle() {
    return this.__title;
  }

  static parse(str) {
    return new ConData(str);
  }
}

class ConLoader {
  conDataCache = new Map();
  path = window.location.pathname;
  _itemCallback = null;

  loadContent(id, callback) {
    const key = `_id_${id}`;
    if (this.conDataCache.has(key) && this.conDataCache.get(key) !== null) {
      this.itemLoaded(this.conDataCache.get(key), true);
      if (callback) callback(200);
      return;
    }
    axios.get(`${this.path}content/${id}.md`)
      .then(response => {
        const conData = new ConData(id, response.data);
        this.conDataCache.set(key, conData);
        this.itemLoaded(conData, false);
        if (callback) callback(response.status);
      })
      .catch(error => {
        if (error.response.status !== 404) {
          console.log(`load con[id=${id}]: ${error}`);
        }
        if (callback) callback(error.response.status);
      });
  }

  loadList(callback) {
    let itemId = 0;
    const loadItem = () => {
      this.loadContent(itemId, status => {
        if (itemId >= 10) {
          console.log("over 10 content");
          if (callback) callback(false);
          return;
        }
        if (status === 200) {
          itemId++;
          loadItem();
        }else {
          if (!callback) return;
          if (status === 404 || status === 0) {
            callback(true);
          }else{
            callback(false);
          }
        }
      });
    };
    this.loadContent("header", status => {
      if (status === 200) loadItem();
    });
  }

  itemLoaded(itemData, isCache) {
    if (this._itemCallback) {
      this._itemCallback(itemData, isCache, [...this.conDataCache.values()]);
    }
  }

  load(callback, done) {
    this._itemCallback = callback;
    this.loadList(isSuccess => {
      console.log("content loaded");
      if (done) done([...this.conDataCache.values()], isSuccess);
    });
  }

  saveCache() {
    if (!window['sessionStorage']) return;
    const cacheArr = [];
    for (const [, val] of this.conDataCache) {
      cacheArr.push(val.getState());
    }
    sessionStorage.setItem('con_cache', JSON.stringify(cacheArr));
  }
  
  loadCache() {
    if (!window['sessionStorage']) return;
    const savedCache = sessionStorage.getItem('con_cache');
    if (!savedCache) return;
    const cacheArr = JSON.parse(savedCache);
    cacheArr.forEach((val, i) => {
      const conData = new ConData(val);
      const key = `_id_${conData.getId()}`;
      if (!this.conDataCache.has(key)) {
        this.conDataCache.set(key, conData);
      }
    });
  }
}

class ConItem extends React.Component {
  onPreviewClick = e => {
    e.preventDefault();
  }

  render() {
    const { data } = this.props;
    const title = data.getTitle();
    if (title) {
      let text = DOMPurify.sanitize(data.getHtml(), {ALLOWED_TAGS: [], KEEP_CONTENT: true});
      if (text.substr(0, title.length) === title) {
        text = text.substr(title.length, text.length);
      }
      if (text.length > 100) {
        text = `${text.substr(0, 100)}...`;
      }
      return (
        <ConCard {...this.props}>
          <a className="con-preview"
            data-id={data.getId()}
            href={`${window.location.pathname}?id=${data.getId()}`}
            onClick={this.onPreviewClick}>{title}</a>
          <p className="con-preview">{text}</p>
        </ConCard>
      );
    }else{
      const clean = DOMPurify.sanitize(data.getHtml());
      return <ConCard {...this.props} dangerouslySetInnerHTML={{__html: clean}} />;
    }
  }
}

class ContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conList: [],
      loaded: false
    };
    this.loader = new ConLoader();
    this.viewRef = React.createRef();
    console.log("content init");
  }

  componentDidMount() {
    if (this.state.loaded) return;
    this.loader.loadCache();
    this.loader.load((item, isCache, list) => {
      //Only rerender when a new item is loaded
      if (!isCache) this.setState({conList: list});
    }, (list) => {
      this.loader.saveCache();
      //Render all data at once if all are cached
      if (this.state.conList.length !== list.length) {
        this.setState({conList: list});
      }
      this.setState({loaded: true});
    });
  }

  render() {
    return (
      <ConView ref={this.viewRef}>
        {this.state.conList.map((conData, i) => <ConItem key={conData.getId()} data={conData} />)}
      </ConView>
    );
  }
}

export default ContentPage;
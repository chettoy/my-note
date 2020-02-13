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

  /*
   * load a content by id
   * callback: fun(statusCode, conData, isFromCache)
   */
  loadContent(id, callback) {
    const key = `_id_${id}`;
    if (this.conDataCache.has(key)) {
      const cachedData = this.conDataCache.get(key);
      if(cachedData !== null) {
        if (callback) callback(200, cachedData, true);
        return;
      }
    }
    axios.get(`${this.path}content/${id}.md`)
      .then(response => {
        const conData = new ConData(id, response.data);
        this.conDataCache.set(key, conData);
        if (callback) callback(response.status, conData, false);
      })
      .catch(error => {
        if (error.response.status !== 404) {
          console.log(`load con[id=${id}]: ${error}`);
        }
        if (callback) callback(error.response.status, null, false);
      });
  }

  _loadItems(itemCallback) {
    return new Promise((resolve, reject) => {
      let itemId = 0;
      const loadItem = () => {
        this.loadContent(itemId, (status, data, isFromCache) => {
          if (status === 200) {
            itemCallback(status, data, isFromCache);
            itemId++;
            if (itemId > 10) {
              reject("over 10 content");
            }else{
              loadItem();
            }
          }else if (status === 404 || status === 0) {
            resolve();
          }else{
            reject(status);
          }
        });
      };
      this.loadContent("header", status => {
        if (status === 200) loadItem();
      });
    });
  }

  reqUpdate(onNewConLoaded) {
    this._loadItems((statusCode, conData, isFromCache) => {
      if (!isFromCache) onNewConLoaded(conData, [...this.conDataCache.values()]);
    }).then(() => {
      console.log('content loaded');
      this.saveCache();
    }).catch(reason => {
      console.log('content load error: ' + reason);
    });
  }

  reqCache(callback) {
    callback([...this.conDataCache.values()]);
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
      conList: []
    };
    this.loader = new ConLoader();
    this.viewRef = React.createRef();
  }

  componentDidMount() {
    this.loader.loadCache();
    this.loader.reqCache(list => {
      this.setState({conList: list});
    });
    this.loader.reqUpdate((item, list) => {
      this.setState({conList: list});
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
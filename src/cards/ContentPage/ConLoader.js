import axios from 'axios';
import ConData from './ConData';

class ConLoader {
  conDataCache = null;
  path = window.location.pathname;

  /*
   * load a content by id
   * callback: fun(statusCode, conData, isFromCache)
   */
  loadContent(id, callback) {
    const key = `_id_${id}`;
    this._checkCache();
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
      this._saveCache();
    }).catch(reason => {
      console.log('content load error: ' + reason);
    });
  }

  reqCache(callback) {
    this._checkCache();
    callback([...this.conDataCache.values()]);
  }

  _saveCache() {
    if (this.conDataCache === null) return;
    if (!window['sessionStorage']) return;
    const cacheArr = [];
    for (const [, val] of this.conDataCache) {
      cacheArr.push(val.getState());
    }
    sessionStorage.setItem('con_cache', JSON.stringify(cacheArr));
  }
  
  _checkCache() {
    if (this.conDataCache !== null) return;
    this.conDataCache = new Map();
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

export default ConLoader;
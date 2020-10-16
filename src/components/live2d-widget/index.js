//const live2d_path = 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/';
const live2d_path = process.env.PUBLIC_URL + '/live2d-widget/';

function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;
    if (type === 'css') {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.href = url;
    } else if (type === 'js') {
      tag = document.createElement('script');
      tag.src = url;
    }
    if (tag) {
      tag.async = false;
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

class Live2dWidget {
  static proxy = null;
  static load = () => loadExternalResource(live2d_path + 'live2d.min.js', 'js')
    .then(() => import('./waifu-tips'))
    .then(({ initWidget }) => initWidget({
      waifuPath: live2d_path + 'waifu-tips.json',
      apiPath: 'https://live2d.fghrsh.net/api/',
      //cdnPath: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/'
    }))
    .then(instance => {
      Live2dWidget.proxy = instance;
    });
  // initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
  // API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
  // 初始化看板娘会自动加载指定目录下的 waifu-tips.json

  static showMessage = msg => { // the widget may be hid
    Live2dWidget.proxy.showMessage(msg, 5000, 8);
  }
}

export default Live2dWidget;
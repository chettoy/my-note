const api = window['mClientUtils'];

class ClientUtils {
  static exit = () => api && api.exit('✓');
  static open = (url) => api && api.open('✓', url);
  static toggleMenu = (isOpen) => api && api.toggleOptionsMenu('✓', isOpen);
  static getStatusBarHeight = () => api ? api.getStatusBarHeight('✓') / window.devicePixelRatio : 0;
}

ClientUtils.isClient = navigator.userAgent.indexOf('; wv) ') !== -1 && api;

export default ClientUtils;
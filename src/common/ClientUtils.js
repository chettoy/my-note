const api = window['mClientUtils'];

class ClientUtils {
  static exit = () => api && api.exit('✓');
  static toggleMenu = (isOpen) => api && api.toggleOptionsMenu('✓', isOpen);
  static getStatusBarHeight = () => api? api.getStatusBarHeight('✓') / window.devicePixelRatio: 0;
}

ClientUtils.isClient = navigator.userAgent === 'ReactDebug' && api;

export default ClientUtils;
const api = window['mClientUtils'];
class ClientUtils {
  static isClient = () => navigator.userAgent === 'ReactDebug' && window.mClientUtils;
  static exit = () => api && api.exit('✓');
  static toggleMenu = (isOpen) => api && api.toggleOptionsMenu('✓', isOpen);
  static getStatusBarHeight = () => api? api.getStatusBarHeight('✓') / window.devicePixelRatio: 0;
}

export default ClientUtils;
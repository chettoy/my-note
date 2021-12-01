class MyCommon {
  static className2s(className) {
    //return '.' + className.split(' ').join('.');
    return '.' + className.split(' ')[0];
  }
}

MyCommon.isSnap = navigator.userAgent === 'ReactSnap';

export default MyCommon;
export const c2s = MyCommon.className2s;
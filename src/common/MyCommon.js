import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

class MyCommon {
  static className2s(className) {
    //return '.' + className.split(' ').join('.');
    return '.' + className.split(' ')[0];
  }
}

MyCommon.isSnap = navigator.userAgent === 'ReactSnap';

export default MyCommon;
export const c2s = MyCommon.className2s;

export function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child {...props} navigate={navigate} location={location} params={params} />;
  }
}

export function LocationListener(props) {
  const location = useLocation();

  React.useEffect(() => {
    props.listenFunc(location);
  }, [location, props]);

  return null;
};
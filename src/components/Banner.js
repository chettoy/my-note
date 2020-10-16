import React from 'react';
import MyCommon from '../common/MyCommon';
import Loading from './Loading';
import styles from './Banner.module.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    return (
      <header className={styles.BannerView}>
        <span className={styles.con}>
          <span>...</span><br />
          <i>under construction</i>
        </span>
        <span className={styles.bottom}>
          {this.state.loaded || <Loading />}
        </span>
      </header>
    );
  }

  componentDidMount() {
    if (MyCommon.isSnap) return;
    this.setState({ loaded: true });
  }
}

export default Banner;
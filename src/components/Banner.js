import React from 'react';
import MyCommon from '../common/MyCommon';
import styles from './Banner.module.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  render() {
    return (
      <header className={styles.BannerView}>
        <span
          className={styles.con}
          styles={{display: this.state.loaded? "block": "none"}}>
          <span>...</span><br />
          <i>under construction</i>
        </span>
      </header>
    );
  }

  componentDidMount() {
    if (MyCommon.isSnap) return;
    this.setState({loaded: true});
  }
}

export default Banner;
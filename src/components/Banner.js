import React from 'react';
import Loading from './Loading';
import styles from './Banner.module.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    return (
      <div className={styles.BannerWrapper}>
        <header className={styles.BannerView}>
          <span className={styles.con}>
            <span>...</span><br />
            <i>under construction</i>
          </span>
          <span className={styles.bottom}>
            {this.state.loaded || <Loading />}
          </span>
        </header>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    this.setState({ loaded: true });
  }
}

export default Banner;
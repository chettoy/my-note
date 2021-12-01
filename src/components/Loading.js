import React from 'react';
import styles from './Loading.module.scss';

class Loading extends React.Component {
  render() {
    return (
      <div className={styles.LoadingView}>
        <span></span><span></span><span></span>
        <span>loading...</span>
        <span></span><span></span><span></span>
      </div>
    )
  }
}

export default Loading;
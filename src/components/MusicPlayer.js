import React from 'react'
import styles from './MusicPlayer.module.css'

class MusicPlayer extends React.Component {
  render() {
    return (
      <div className={styles.music}>
        <span className={styles.status}>###</span>
      </div>
    )
  }
}

export default MusicPlayer;
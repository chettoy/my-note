import React from 'react'
import Icon from '@mdi/react'
import {mdiMenu, mdiMagnify} from '@mdi/js'
import styles from './Toolbar.module.css'

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconHover: false,
      showSearch: false
    };
  }

  handleMenuClick = () => {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
  }

  handleSearchClick = () => {
    this.setState({showSearch: !this.state.showSearch});
  }

  handleSearch = e => {
    e.preventDefault();
    const text = e.target[0].value;
    if (this.props.onSearch) {
      this.props.onSearch(text);
    }
  }

  render() {
    return (
      <div className={styles.toolbar}>
        <span className={styles.menuIcon}
          onClick={this.handleMenuClick}
          onMouseEnter={() => this.setState({menuIconHover: true})}
          onMouseLeave={() => this.setState({menuIconHover: false})}
          style={{backgroundColor: this.state.menuIconHover? 'rgba(85,85,85,1)': 'rgba(0,0,0,0)'}}>
            <Icon path={mdiMenu} />
        </span>
        <span className={styles.title}>
          <a href=".">my note</a>
        </span>
        <span className={styles.searchIcon} onClick={this.handleSearchClick}>
          <Icon path={mdiMagnify} />
        </span>
        <div className={styles.search} style={{display: this.state.showSearch? 'block':'none'}}>
          <form action="#" method="get" onSubmit={this.handleSearch}>
            <input type="search" name="search" placeholder="search..." autoFocus={this.state.showSearch} autoComplete="off" x-webkit-speech="true"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Toolbar;

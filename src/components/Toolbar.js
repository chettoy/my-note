import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Toolbar.module.css';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuIconHover: false};
  }

  handleMenuClick = () => {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
  }

  handleSearchClick = () => {
    if (this.props.onSearchClick) {
      this.props.onSearchClick();
    }
  }

  render() {
    return (
      <div className={styles.toolbar}>
        <span className={styles.menuIcon} onClick={this.handleMenuClick} onMouseEnter={()=>this.setState({menuIconHover:true})} onMouseLeave={()=>this.setState({menuIconHover:false})} style={{backgroundColor:this.state.menuIconHover? 'rgba(85,85,85,1)': 'rgba(0,0,0,0)'}}><MenuIcon /></span>
        <span className={styles.title}><a href=".">my note</a></span>
        <span className={styles.searchIcon} onClick={this.handleSearchClick}><SearchIcon /></span>
      </div>
    );
  }
}

export default Toolbar;

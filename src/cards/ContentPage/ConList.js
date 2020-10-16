import React from 'react';
import PropTypes from 'prop-types';
import ConLoader from './ConLoader';
import ConItem from './ConItem';
import Loading from '../../components/Loading';

class ConList extends React.Component {
  static propTypes = {
    conLoader: PropTypes.instanceOf(ConLoader).isRequired
  }

  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      conList: [],
      loading: true
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.setState({ loading: false });
    const loader = this.props.conLoader;
    //If you have just loaded a content, it will be displayed on top
    loader.reqCache(list => {
      if (this.mounted) this.setState({ conList: list });
    });
    const prevUpdateTime = window['sessionStorage']?.getItem('conListUpdateTime') ?? 0;
    console.log('lastUpdateTime: ' + prevUpdateTime);
    if (Math.abs(Date.now() - prevUpdateTime) < 2 * 60 * 1000) return;
    console.log('updating content...');
    loader.reqUpdate((item, list) => {
      if (this.mounted) this.setState({ conList: list });
    }).then(() => {
      window['sessionStorage'] && sessionStorage.setItem('conListUpdateTime', Date.now());
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.state.loading ? <Loading /> :
      this.state.conList.map((conData, i) =>
        <ConItem key={conData.getId()} data={conData} />);
  }
}

export default ConList;
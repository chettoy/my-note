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
    this.setState({loading: false});
    const loader = this.props.conLoader;
    //If you have just loaded a content, it will be displayed on top
    loader.reqCache(list => {
      if (this.mounted) this.setState({conList: list});
    });
    loader.reqUpdate((item, list) => {
      if (this.mounted) this.setState({conList: list});
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.state.loading? <Loading />:
      this.state.conList.map((conData, i) =>
        <ConItem key={conData.getId()} data={conData} />);
  }
}

export default ConList;
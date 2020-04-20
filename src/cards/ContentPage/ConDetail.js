import React from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import ConLoader from './ConLoader';
import ConCard from './ConCard';
import Loading from '../../components/Loading';

class ConDetail extends React.Component {
  static propTypes = {
    conLoader: PropTypes.instanceOf(ConLoader).isRequired
  }

  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {html: null};
  }

  componentDidMount() {
    this.mounted = true;
    const loader = this.props.conLoader;
    loader.loadContent(this.props.match.params.id, (statusCode, conData, isFromCache) => {
      if (statusCode !== 200 || !conData) {
        if (this.mounted) this.setState({html: `<p>Failed to load (${statusCode})</p>`});
        return;
      }
      if (this.mounted) {
        this.setState({
          html: DOMPurify.sanitize(conData.getHtml(), {
            ADD_TAGS: ['semantics', 'annotation'] // for KaTeX mathMl
          })
        });
      }
      if (!isFromCache) loader._saveCache();
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.state.con === null? <Loading />:
      <ConCard dangerouslySetInnerHTML={{__html: this.state.html}} />;
  }
}

export default ConDetail;
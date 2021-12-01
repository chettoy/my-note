import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { withRouter } from '../../common/MyCommon';
import ConCard from './ConCard';
import ConData from './ConData';

class ConItem extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(ConData).isRequired
  }

  onPreviewClick = () => {
    if (this.props.previewClickCallback) this.props.previewClickCallback();
  }

  render() {
    const { data } = this.props;
    const title = data.getTitle();
    if (title) {
      let text = DOMPurify.sanitize(data.getHtml(), { ALLOWED_TAGS: [], KEEP_CONTENT: true });
      if (text.substring(0, title.length) === title) {
        text = text.substring(title.length, title.length + text.length).trim();
      }
      if (text.length > 100) {
        text = `${text.substring(0, 100)}...`;
      }
      return (
        <ConCard {...this.props}>
          <Link className="con-preview post-title-link"
            to={`id/${data.getId()}`}
            onClick={this.onPreviewClick}>{title}</Link>
          <p className="con-preview">{text}</p>
        </ConCard>
      );
    } else {
      const clean = DOMPurify.sanitize(data.getHtml());
      return <ConCard {...this.props} dangerouslySetInnerHTML={{ __html: clean }} />;
    }
  }
}

export default withRouter(ConItem);
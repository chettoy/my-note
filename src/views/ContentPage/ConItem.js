import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import ConCard from './ConCard';
import ConData from './ConData';


function ConItem(props) {

  const previewClickHandle = () => {
    if (props.previewClickCallback) props.previewClickCallback();
  }

  const { data } = props;
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
      <ConCard {...props}>
        <Link className="con-preview post-title-link"
          to={`id/${data.getId()}`}
          onClick={previewClickHandle}>{title}</Link>
        <p className="con-preview">{text}</p>
      </ConCard>
    );
  } else {
    const clean = DOMPurify.sanitize(data.getHtml());
    return <ConCard {...props} dangerouslySetInnerHTML={{ __html: clean }} />;
  }

}

ConItem.propTypes = {
  data: PropTypes.instanceOf(ConData).isRequired
};

export default React.memo(ConItem);
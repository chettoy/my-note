import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import ConLoader from './ConLoader';
import ConCard from './ConCard';
import Loading from '../../components/Loading';

function ConDetail(props) {
  const conId = props.conId;
  const loader = props.conLoader;
  const [html, setHtml] = useState(null);

  useEffect(() => {
    loader.loadContent(conId, (statusCode, conData, isFromCache) => {
      if (statusCode !== 200 || !conData) {
        setHtml(`<p>Failed to load (${statusCode})</p>`);
        return;
      }
      setHtml(
        DOMPurify.sanitize(conData.getHtml(), {
          ADD_TAGS: ['semantics', 'annotation'] // for KaTeX mathMl
        })
      );
      if (!isFromCache) loader._saveCache();
    });
    return () => {

    };
  }, [conId, loader]);

  return html === null ? <Loading /> :
    <ConCard dangerouslySetInnerHTML={{ __html: html }} />;
}

ConDetail.propTypes = {
  conLoader: PropTypes.instanceOf(ConLoader).isRequired
};

export default React.memo(ConDetail);
import React from 'react';
import styled from 'styled-components/macro';

const LoadingView = styled.div`
  color: black;
  font-size: 2rem;
`;

class Loading extends React.Component {
  render() {
    return (
      <LoadingView>
        <span>Loading...</span>
      </LoadingView>
    )
  }
}

export default Loading;
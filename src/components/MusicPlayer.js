import React from 'react';
import styled from 'styled-components/macro';

const MusicView = styled.div`
  width: 100%;
  .status{
    font-family:'Source Sans Pro','Courier New','Courier',monospace;
  }
`;

class MusicPlayer extends React.Component {
  render() {
    return (
      <MusicView>
        <span className='status'>###</span>
      </MusicView>
    )
  }
}

export default MusicPlayer;
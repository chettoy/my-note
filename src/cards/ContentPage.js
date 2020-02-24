import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import Card from './Card';
import ConLoader from './ContentPage/ConLoader';
import ConList from './ContentPage/ConList';
import ConDetail from './ContentPage/ConDetail';

const ConContainer = styled(Card)`
  background: transparent;
  box-shadow: none;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  font-size: 1rem;
  line-height: 1.5rem;
  @media screen and (max-width:549px) {
    padding: 0 0.375rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  a.con-preview {
    color: #2196f3;
    font-size: 1.5rem;
  }
  iframe, video, img {
    max-width: 100%;
    height: auto;
  }
  blockquote {
    margin: 0;
    padding: 0.3rem 0.5rem;
    border-left: 0.25rem solid #0c0;
    background: #f5f2f0;
  }
  code {
    overflow: auto;
  }
`;

class ContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.loader = new ConLoader();
    this.viewRef = React.createRef();
  }

  render() {
    return (
      <ConContainer ref={this.viewRef}>
        <Switch>
          <Route
            path={this.props.match.url} exact
            render={(props) => <ConList {...props} conLoader={this.loader} />} />
          <Route
            path={this.props.match.url + 'id/:id'}
            render={(props) => <ConDetail {...props} conLoader={this.loader} />} />
          <Redirect from='*' to='/' />
        </Switch>
      </ConContainer>
    );
  }
}

export default ContentPage;
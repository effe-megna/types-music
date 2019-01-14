import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"

import LIbrary from './views/Library';
import AlbumView from './views/Album/AlbumView';

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route
              exact={true}
              path="/"
              component={LIbrary}
            />
            <Route
              exact={true}
              path="/album/:id"
              component={AlbumView}
            />
          </Switch>
        </Router>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 48px auto 64px;
  padding: 0 24px;
`

export default App;

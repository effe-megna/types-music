import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import * as theme from "styled-theming"
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import Library from './views/Library';
import AlbumView from './views/Album/AlbumView';
import ArtistsView from './views/Artists';
import AlbumArtistView from './views/AlbumsArtist';
import Albums from './views/Albums';
import PlaylistController from './components/PlaylistController';

const App = () => {
  const [appTheme, setTheme] = React.useState("light")

  const onToggleTheme = () => {
    if (appTheme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <ThemeProvider theme={{ mode: appTheme }}>
      <Container>
        <label style={{ display: "inline-block", margin: 5, position: "absolute", right: 0 }}>
          <Toggle
            defaultChecked={appTheme === "light"}
            icons={false}
            onChange={onToggleTheme} />
        </label>
        <Router>
          <ScrollbarWrapper>
            <Switch>
              <Route
                exact={true}
                path="/"
                component={Library}
              />
              <Route
                exact={true}
                path="/artists"
                component={ArtistsView}
              />
              <Route
                exact={true}
                path="/artist/:id"
                component={AlbumArtistView}
              />
              <Route
                exact={true}
                path="/albums"
                component={Albums}
              />
              <Route
                exact={true}
                path="/album/:id"
                component={AlbumView}
              />
            </Switch>
          </ScrollbarWrapper>
        </Router>
        <PlaylistController />
      </Container>
    </ThemeProvider>
  )
}

const ScrollbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 20px;
`;


const containerBackground = theme("mode", {
  light: "#fff",
  dark: "#222"
})

const Container = styled.div`
  height: 100%;
  background: ${containerBackground}
`

export default App;

import * as React from "react"
import { inject, Observer } from 'mobx-react';
import LibraryUI from 'src/stores/ui/LibraryUi';
import styled from 'styled-components';
import Card from 'src/components/Card';
import { Link } from 'react-router-dom';
import Title from 'src/components/Title';

interface IProps {
  libraryUI: LibraryUI,
  match: any
}

const AlbumsArtistView: React.FunctionComponent<IProps> = ({
  libraryUI,
  match
}) => {

  const params: any = match.params

  if (params.id === undefined) {
    throw new Error("The id cannot be null")
  }

  React.useEffect(
    () => {
      libraryUI.loadAlbumsPerArtist(params.id)

      return () => {
        libraryUI.currentAlbumsPerArtistInUI = []
      }
    }
  )

  return (
    <Container>
      <Title>{params.id}</Title>
      <Albums>
        <Observer>
          {() => (
            libraryUI.currentAlbumsPerArtistInUI.map((x, i) => (
              <UnstyledLink
                to={`/album/${x.album}`}
                key={x.album}
              >
                <Card
                  title={x.album}
                  artist={x.artist}
                  url={x.artwork}
                />
              </UnstyledLink>
            ))
          )}
        </Observer>
      </Albums>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: inherit;
`

const Albums = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

export default inject("libraryUI")(AlbumsArtistView);
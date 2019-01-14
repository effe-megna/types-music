import * as React from "react"
import styled from "styled-components"
import LibraryUI from 'src/stores/ui/LibraryUi';
import { inject, observer } from 'mobx-react';
import RowSong from 'src/components/RowSong';

interface IProps {
  libraryUI: LibraryUI,
  match: any
}

const AlbumView: React.FunctionComponent<IProps> = ({
  libraryUI,
  match
}) => {
  const { currentAlbumInUI } = libraryUI

  const params: any = match.params

  if (params.id !== undefined) {
    libraryUI.loadAlbumByTitle(params.id)
  }

  return (
    <Container>
      <ArtWork
        src={currentAlbumInUI ? currentAlbumInUI.artwork : "https://lastfm-img2.akamaized.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb"}
      />
      <div style={{ width: "100%" }}>
        <Title>
          Hurry Up Were Dreaming
        </Title>
        <Artist>
          M83
        </Artist>
        <Songs>
          {currentAlbumInUI && currentAlbumInUI.songs && (
            currentAlbumInUI.songs.map((s, i) => (
              <RowSong
                key={i}
                title={s.title}
              />
            ))
          )}
        </Songs>
      </div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ArtWork = styled.img`
  pointer-events: none;
  user-select: none;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  border-radius: 6px;
  margin-right: 16px;
`

const Title = styled.h1`
  margin: 0px 0px 8px;
`

const Artist = styled.h2`
  color: rgb(246, 42, 84);
  font-weight: normal;
  margin: 0px 0px 16px;
`

const Songs = styled.div`
  width: 100%;
`

export default inject("libraryUI")(observer(AlbumView));
import * as React from "react"
import styled from "styled-components"
import LibraryUI from 'src/stores/ui/LibraryUi';
import { inject, Observer } from 'mobx-react';
import RowSong from 'src/components/RowSong';
import Title from 'src/components/Title';

interface IProps {
  libraryUI: LibraryUI,
  match: any
}

const AlbumView: React.FunctionComponent<IProps> = ({
  libraryUI,
  match
}) => {

  const params: any = match.params

  if (params.id === undefined) {
    throw new Error("The id cannot be null")
  }

  React.useEffect(
    () => {
      if (params.id !== undefined) {
        libraryUI.loadAlbumByTitle(params.id)
      }

      return () => {
        libraryUI.currentAlbumInUI = undefined
      }
    }
  )

  return (
    <Container>
      <Observer>
        {() => {
          const { currentAlbumInUI } = libraryUI

          return (
            <>
              <ArtWork
                src={currentAlbumInUI ? currentAlbumInUI.artwork : "https://lastfm-img2.akamaized.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb"}
              />
              <div style={{ width: "100%" }}>
                <Title>
                  {currentAlbumInUI ? currentAlbumInUI.title : "--"}
                </Title>
                <Artist>
                  {currentAlbumInUI ? currentAlbumInUI.artist : "--"}
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
            </>
          )
        }}
      </Observer>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  padding: 50px;
  background: inherit;

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

const Artist = styled.h2`
  color: rgb(246, 42, 84);
  font-weight: normal;
  margin: 0px 0px 16px;
`

const Songs = styled.div`
  width: 100%;
`

export default inject("libraryUI")(AlbumView);
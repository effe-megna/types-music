import * as React from "react"
import { inject, Observer } from 'mobx-react';
import LibraryUI from 'src/stores/ui/LibraryUi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'src/components/Card';
import Title from 'src/components/Title';

interface IProps {
  libraryUI: LibraryUI
}

const Albums: React.FunctionComponent<IProps> = ({
  libraryUI
}) => {

  if (libraryUI.albums.length === 0) {
    libraryUI.loadAlbums()
  }

  return (
    <Container>
      <Title>Albums</Title>
      <ScrollbarWrapper>
        <AlbumsContainer>
          <Observer>
            {() => (
              libraryUI.albums.map((x, i) => (
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
        </AlbumsContainer>
      </ScrollbarWrapper>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: inherit;
`

const ScrollbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 20px;
`;

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

export default inject("libraryUI")(Albums);
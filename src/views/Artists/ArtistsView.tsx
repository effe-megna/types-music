import * as React from "react"
import ArtistsStore from 'src/stores/domain/ArtistsStore';
import { inject, Observer } from 'mobx-react';
import RowButton from 'src/components/RowButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from 'src/components/Title';

interface IProps {
  artistsStore: ArtistsStore
}

const ArtistsView: React.FunctionComponent<IProps> = ({
  artistsStore
}) => {

  if (artistsStore.artists.length === 0) {
    artistsStore.loadArtists()
  }

  return (
    <Container>
      <Title>
        Artists
      </Title>
      <Observer>
        {() => (
          artistsStore.artists.map((x, i) => (
            <UnstyledLink
              to={`/artist/${x.artist}`}
              key={x.artist}
            >
              <RowButton
                label={x.artist}
              />
            </UnstyledLink>
          ))
        )}
      </Observer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: inherit;
`

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

export default inject("artistsStore")(ArtistsView);
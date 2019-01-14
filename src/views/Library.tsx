import * as React from 'react';
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"

import Card from 'src/components/Card';
import NavBar from 'src/components/NavBar/NavBar';
import RowButton from 'src/components/RowButton';
import LibraryStore from 'src/stores/domain/LibraryStore';

interface IProps {
  libraryStore: LibraryStore
}

const Library: React.FunctionComponent<IProps> = ({
  libraryStore
}) => {

  const click = () => alert("clicked")

  return (
    <Container>
      <NavBar
        title="Library"
        canGoBack={false}
      />
      <RowButton
        label="Artists"
        handleOnClick={click}
      />
      <RowButton
        label="Albums"
        handleOnClick={click}
      />
      <RowButton
        label="Playlist"
        handleOnClick={click}
      />
      <RecentlyPlayed>
        {libraryStore.recentlyPlayed.map((s, i) => (
          <CardLink
            to={`/album/${s.title}`}
            key={s.title}
          >
            <Card
              title={s.title}
              artist={s.artist}
              url={s.url}
            />
          </CardLink>
        ))}
      </RecentlyPlayed>
    </Container>
  );
}

const Container = styled.div`
 
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

const RecentlyPlayed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`

export default inject("libraryStore")(observer(Library));
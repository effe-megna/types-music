import * as React from 'react';
import styled from "styled-components"
import { inject, Observer } from "mobx-react"
import { Link } from "react-router-dom"

import Card from 'src/components/Card';
import RowButton from 'src/components/RowButton';
import LibraryStore from 'src/stores/domain/LibraryStore';
import Title from 'src/components/Title';

interface IProps {
  libraryStore: LibraryStore
}

const Library = ({
  libraryStore
}: IProps) => {

  return (
    <Container>
      <Title>
        Library
      </Title>
      <UnstyledLink to="/artists">
        <RowButton
          label="Artists"
        />
      </UnstyledLink>
      <UnstyledLink to="/albums">
        <RowButton
          label="Albums"
        />
      </UnstyledLink>
      <Observer>
        {() => (
          <RecentlyPlayed>
            {libraryStore && libraryStore.recentlyPlayed.map((s, i) => (
              <UnstyledLink
                to={`/album/${s.title}`}
                key={s.title}
              >
                <Card
                  title={s.title}
                  artist={s.artist}
                  url={s.url}
                />
              </UnstyledLink>
            ))}
          </RecentlyPlayed>
        )}
      </Observer>
    </Container>
  );
}


const Container = styled.div`
  padding: 50px;
  background: inherit;
`

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`

const RecentlyPlayed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`

export default inject("libraryStore")(Library)
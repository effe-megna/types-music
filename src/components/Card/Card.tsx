import * as React from "react"
import styled from "styled-components"

interface IProps {
  title: string,
  artist: string,
  url: string
}

const Card: React.FunctionComponent<IProps> = ({
  title,
  artist,
  url
}) => {
  return (
    <Container>
      <Image
        src={url}
      />
      <Title>
        {title}
      </Title>
      <Artist>
        {artist}
      </Artist>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  width: 200px;
`

const Image = styled.img`
  max-width: 100%;
  pointer-events: none;
  user-select: none;
  border-radius: 4px;
`

const Title = styled.label`
  padding-top: 8px;
  font-weight: normal;
  user-select: none;
  margin: 0px;
`

const Artist = styled.label`
  color: rgb(158, 159, 160);
  font-weight: normal;
  user-select: none;
  margin: 0px;
`

export default Card;
import * as React from "react"
import styled from "styled-components"
import * as theme from "styled-theming"

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
      <SongTitle>
        {title}
      </SongTitle>
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

const songTitleColor = theme("mode", {
  light: "#222",
  dark: "#fff"
})

const SongTitle = styled.label`
  padding-top: 8px;
  font-weight: normal;
  user-select: none;
  margin: 0px;
  color: ${songTitleColor}
`

const Artist = styled.label`
  color: rgb(158, 159, 160);
  font-weight: normal;
  user-select: none;
  margin: 0px;
`

export default Card;
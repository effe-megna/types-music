import * as React from "react"
import styled from 'styled-components';

const PlaylistController = () => {
  return (
    <Container>
      <ChevronContainer>
        <img 
          src="assets/chevron_wide.svg"
        />
      </ChevronContainer>
      <ArtworkContainer>
        <Artwork 
          src="http://tannerv.ddns.net:12345/SpotiFree/files/music/Foster the People/Torches/Artwork.png"
        />
      </ArtworkContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  background: rgb(255, 255, 255);
  transition: all 0.35s ease 0s;
  background: inherit;
  box-shadow: rgb(165,165,165) 0px 0px 12px;
`

const ChevronContainer = styled.div`
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 48px;
  cursor: pointer;
  transition: all 0.35s ease 0s;
`

const ArtworkContainer = styled.div`
  position: relative;
  max-height: 100%;
  text-align: center;
  height: 46vh;
  min-height: 8em;
  width: 100%;
  padding: 8px 0px;
  transition: all 0.35s ease 0s;
`

const Artwork = styled.img`
  height: 18em;
  width: auto;
  max-height: 90%;
  max-width: 100%;
  margin-top: 8px;
  transform: scale(1.1);
  pointer-events: none;
  user-select: none;
  box-shadow: rgb(165, 165, 165) 0px 10px 30px;
  border-radius: 4px;
  transition: all 0.35s ease 0s;
`

export default PlaylistController
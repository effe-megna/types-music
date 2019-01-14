import * as React from "react"
import styled from "styled-components"

interface IProps {
  title: string
}

const RowSong: React.FunctionComponent<IProps> = ({
  title
}) => {
  return (
    <Container>
      <Row>
        <Title>
          {title}
        </Title>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 48px;
  cursor: pointer;
  border-bottom: 1px solid rgb(225, 225, 226);
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1 1 0%;
  overflow: hidden;
`

const Title = styled.h2`
  font-weight: normal;
  color: rgb(0, 0, 0);
  user-select: none;
`

export default RowSong;
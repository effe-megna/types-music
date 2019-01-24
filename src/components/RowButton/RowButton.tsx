import * as React from "react"
import styled from "styled-components"

interface IProps {
  label: string,
  handleOnClick?: () => void
}

const RowButton: React.FunctionComponent<IProps> = ({
  label,
  handleOnClick
}) => {

  const Container = styled.div`
    display: flex;
    min-height: 48px;
    cursor: pointer;
    border-bottom: 1px solid rgb(225, 225, 226);
  `

  const Row = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1 1 0%;
    overflow: hidden;
  `

  const Text = styled.h3`
    font-weight: normal;
    color: rgb(246, 42, 84);
    user-select: none;
  `

  return (
    <Container onClick={handleOnClick}>
      <Row>
        <Text>
          {label}
        </Text>
      </Row>
    </Container>
  );
}

export default RowButton;
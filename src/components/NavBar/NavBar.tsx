import * as React from 'react';
import styled from "styled-components"

interface IProps {
  title: string,
  canGoBack: boolean,
  handleGoBack?: () => void
}

const Navbar: React.FunctionComponent<IProps> = ({
  title,
  canGoBack,
  handleGoBack
}) => {

  if (canGoBack && handleGoBack === undefined) {
    throw Error("handleGoback cannot be undefined if it's available")
  } 

  const Container = styled.nav`
    background: white;
  `

  const Title = styled.label`
    font-size: 34px;
    font-weight: bold;
  `

  return (
    <Container>
      {canGoBack && (
        <Title onClick={handleGoBack}>←</Title>
      )}
      <Title>{title}</Title>
    </Container>
  );
}

export default Navbar;
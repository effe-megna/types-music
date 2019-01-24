import * as React from "react"
import styled from 'styled-components';
import * as theme from "styled-theming"

interface IProps {
  style?: any
}

const Title: React.FunctionComponent<IProps> = ({
  style,
  children
}) => {

  return (
    <StyledTitle
      style={style}
    >
      {children}
    </StyledTitle>
  );
}

const color = theme("mode", {
  light: "#222",
  dark: "#fff"
})

const StyledTitle = styled.h1`
  margin: 0px 0px 8px;
  color: ${color}
`

export default Title;
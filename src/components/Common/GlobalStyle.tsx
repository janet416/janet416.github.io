import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
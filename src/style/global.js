import { createGlobalStyle } from 'styled-components'

//const dark = '#0000'
const light = '#eee'
//const sucess = '#2d7c34'
//const alert = '#ea6a0b'
//const fail = '#ea6a0b'
//const open = '#2596be'

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    background-color: ${light};
  }

`;
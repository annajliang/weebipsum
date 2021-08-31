import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
   font-family: 'Action Man';
   src: local('Action Man'), url('../fonts/Action Man Bold.ttf') format('ttf');
}

html {
   font-size: 62.5%; 
}

body {
   font-family: 'Jost', sans-serif;
   font-weight: 500;
   background-color: #F5F0ED;
   background-size: 40px 40px;
   font-size: 1.5rem;
   color: #31302c;
}

h1 img {
    width: 40rem;
    position: relative;
    top: 9px;
    z-index: 1;
}

h2 {
   font-family: 'Action Man';
   font-size: 2.5rem;
   /* font-weight: 600; */
   color: #fff;
   position: relative;
   top: 2px;
}

h3 {
   font-family: 'Action Man'; 
   font-size: 2.5rem;
   font-weight: 600;
   margin-bottom: .5rem;
}

p {
   line-height: 1.3;
}
`;

export default GlobalStyles;

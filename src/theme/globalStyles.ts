import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
   --dark-navy: #453a94;
   --white: #fff;
   --black: #31302c;
   --beige: #F5F0ED;
   --red: #f26663;
   --red-shadow: #de2828;
   --light-navy: #337ab7;

   --action-man: 'Action Man', 'sans-serif';
   --jost: 'Jost', sans-serif;
}

@font-face {
   font-family: 'Action Man', 'sans-serif';
   src: url('/src/assets/fonts/ActionMan-Bold.eot'); /* IE9 Compat Modes */
   src: url('/src/assets/fonts/ActionMan-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/src/assets/fonts/ActionMan-Bold.woff2') format('woff2'), /* Super Modern Browsers */
       url('/src/assets/fonts/ActionMan-Bold.woff') format('woff'), /* Pretty Modern Browsers */
       url('/src/assets/fonts/ActionMan-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/src/assets/fonts/ActionMan-Bold.svg#ActionMan-Bold') format('svg'); /* Legacy iOS */
}

html {
   font-size: 62.5%; 
}

body {
   font-family: var(--jost);
   line-height: 1.3;
   background-color: var(--beige);
   background-size: 40px 40px;
   font-size: 1.6rem;
   color: var(--black);
}

h1 img {
    width: 40rem;
    position: relative;
    top: 9px;
    z-index: 1;
}

h2 {
   font-family: 'Action Man', 'sans-serif';
   font-size: 2.5rem;
   color: var(--white);
   position: relative;
   top: 2px;
}

h3 {
   font-family: 'Action Man', 'sans-serif';
   font-size: 2.5rem;
   font-weight: 600;
   margin-bottom: .5rem;
}

.noWrap {
   white-space: nowrap;
}

@media (max-width: 580px) {
   h1 img {
      width: 32rem;
   }

   h2, h3 {
      font-size: 2rem;
   }
}

@media (max-width: 450px) {
   h1 img {
      width: 26rem;
   }
}

@media (max-width: 420px) {
   h2, h3 {
      font-size: 1.8rem;
   }
}
`;

export default GlobalStyles;

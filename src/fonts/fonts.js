import { createGlobalStyle } from "styled-components";
import ActionManWoff2 from "./actionman-bold-webfont.woff2";
import ActionManWoff from "./actionman-bold-webfont.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Action Man';
        src: local('Action Man'), local('Action Man'),
        url(${ActionManWoff2}) format('woff2'),
        url(${ActionManWoff}) format('woff');
    }
`;

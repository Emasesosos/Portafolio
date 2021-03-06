import { createGlobalStyle } from 'styled-components';

export const DarkToggle = createGlobalStyle `

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: blue;
        -webkit-transition: .4s;
        transition: .4s;
    }
`;

export const LightToggle = createGlobalStyle `

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: green;
        -webkit-transition: .4s;
        transition: .4s;
    }

`;
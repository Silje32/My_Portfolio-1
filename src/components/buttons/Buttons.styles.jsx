import styled from "styled-components";

export const StyledBaseButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: #4BA69D;
      opacity: 0.9;
      transform: scale(0.98);
   }

`

export const StyledExamButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 20px 15px;
   font-size: 22px;
   min-width: 200px;
   margin-top: 10px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#B76E79")};

   &:hover {
      background-color: #4BA69D;
      opacity: 0.9;
      transform: scale(0.98);
   }

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 20px;
        min-width: 300px;

   }

   @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 20px;
        min-width: 300px;
   }      

`

export const StyledProjectButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 20px 15px;
   font-size: 22px;
   min-width: 200px;
   margin-top: 10px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#B76E79")};

   &:hover {
      background-color: #4BA69D;
      opacity: 0.9;
      transform: scale(0.98);
   }

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 20px;
        min-width: 300px;

   }

   @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 20px;
        min-width: 300px;

   }      

`  

export const StyledLethaButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 20px 15px;
   font-size: 22px;
   min-width: 200px;
   margin-top: 10px;
   cursor: pointer;
   border-color: black;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#B76E79")};

   &:hover {
      background-color: #4BA69D;
      opacity: 0.9;
      transform: scale(0.98);
   }

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 20px;
        min-width: 300px;
   }

   @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 20px;
        min-width: 300px;
   }      
   
`;

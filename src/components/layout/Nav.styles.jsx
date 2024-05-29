import styled from "styled-components";

export const NavStyling = styled.nav`
  
  ul {
     list-style-type: none;   
     display: flex;
     padding: 25px 10px;
     min-width: 1470px;
     cursor: pointer;
     background-color: ${(props) => (props.$nav ? "white" : "black")};

}

  ul li {
      font-size: 18px;
      font-family: haboro-serif, times new roman, serif;
      font-style: normal;
      text-align: right;
      font-weight: 500;
      margin: 0 auto;      
}

  a {
   color: ${(props) => (props.$nav ? "grey" : "white")}; 
}
   
  a:hover {
       color: #4BA69D;
}

  @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
  }

`;

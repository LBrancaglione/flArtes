import styled from "styled-components";

export const Nav = styled.nav`
    height: 65px;
    border: none;
    background: none;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;

    @font-face {
    font-family: montSerrat-Bold ;
    src: url(../public/Montserrat-Bold.ttf);
  }

    .logo{
        margin: -5px 0;

        &__title{
            font-family: montSerrat-Bold, sans-serif;
            color: white;
        }
    }
`;
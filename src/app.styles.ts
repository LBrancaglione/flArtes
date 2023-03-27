import styled from "styled-components";
import mainBanner from "./images/post.jpg";
import mainBannerMobile from "./images/postMobile.jpg";

export const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;

  @font-face {
    font-family: montSerrat-Regular ;
    src: url(../public/Montserrat-Regular.ttf);
  }

  .cardTitle{
    font-family: montSerrat-Regular;
    text-align: center;
  }
`;

export const Header = styled.header`
  height: 100vh;
  background-image: url(${mainBanner});
  background-size: cover;
  background-position: center;

  .bannerContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      letter-spacing: 10px;
      font-size: 5rem;
      color: #fff;
    }
    img {
      height: 120px;
      width: 40px;
    }
  }

  @media (max-width: 768px) {
    background-image: url(${mainBannerMobile});
  }
`;
export const cardWrapper = styled.div`
    margin: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-content: center;

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
    }

`;

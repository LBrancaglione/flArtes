import styled from "styled-components";
import leftBackground from "../../images/image-graphic-design.png";
import rightBackground from "../../images/image-photography.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @font-face {
      font-family: montSerrat-ExtraBold;
      src: url(../../public/Montserrat-ExtraBold.ttf);
    }

    @font-face {
      font-family: montSerrat-Regular;
      src: url(../../public/Montserrat-Regular.ttf);
    }

  .leftContent {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${leftBackground});
    background-size: cover;
    background-position: center;

    .leftText {
      text-align: center;
      padding: 10% 20%;
      color: rgba(51, 51, 51, 0.683);

      h1 {
        font-family: montSerrat-ExtraBold;
        font-size: 35px;
        color: black;
      }

      p {
        font-family: montSerrat-Regular;
        font-size: 16px;
        font-weight: bold;
      }
    }
    @media (max-width: 768px) {
      background-image: url(${leftBackground});
      .leftText {
        padding: 10% 5%;
      }
    }
  }

  .rightContent {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${rightBackground});
    background-size: cover;
    background-position: center;

    .rightText {
      text-align: center;
      padding: 10% 20%;
      color: rgba(51, 51, 51, 0.683);
      h1 {
        font-family: montSerrat-ExtraBold;
        font-size: 35px;
        color: black;
      }
      p {
        font-family: montSerrat-Regular;
        font-size: 16px;
        font-weight: bold;
      }
    }

    @media (max-width: 768px) {
      background-image: url(${rightBackground});
      .rightText {
        padding: 10% 5%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

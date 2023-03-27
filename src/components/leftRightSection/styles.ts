import styled from "styled-components";
import rightBackground from "../../images/ecommerce.png";
import righMobileBackground from "../../images/ecommerce.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const leftContent = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @font-face {
    font-family: montSerrat-ExtraBold ;
    src: url(../../public/Montserrat-ExtraBold.ttf);
  }

  @font-face {
    font-family: montSerrat-Regular ;
    src: url(../../public/Montserrat-Regular.ttf);
  }

  .leftMain {
    padding: 0px 20%;
    text-align: left;
    h1 {
      font-family: montSerrat-ExtraBold;
      font-size: 2.5rem;
    }
    p {
      color: rgba(48, 47, 47, 0.74);
      font-family: montSerrat-Regular;
      font-weight: 600;
      font-size: 20px;
      text-align: left;
    }
    .lineUnder {
      width: 120px;
      background: yellow;
      border: 5px solid #3268DB;
      border-radius: 5px;
      margin-top: -8px;
      display: none;
    }
    button {
      border: none;
      background: rgba(0, 0, 0, 0);
      font-family: montSerrat-ExtraBold;
      font-size: 20px;
      font-weight: bold;
      padding: 0px;
      transition: all 0.5s;
    }
    button:hover {
      transform: scale(1.2);
      cursor: pointer;
      .lineUnder {
        display: block;
      }
    }
  }

  .aboutLink{
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    order: 1;
    .leftMain {
      padding: 0 5%;
      text-align: center;
      p {
        text-align: center;
      }
      .lineUnder {
        display: block;
      }
    }
  }
`;

export const rightContent = styled.div`
  width: 100%;
  background-image: url(${rightBackground});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    background-image: url(${righMobileBackground});
    height: 600px;
    order: 0;
  }
`;

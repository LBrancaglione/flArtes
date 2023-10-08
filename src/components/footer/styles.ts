import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  background: #111111;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  .Logo {
    width: 10%;
  }
  .linklist {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding-top: 1%;

  }
  .linklist p:hover {
    color: white;
    cursor: pointer;
  }

  .linklist a{
    text-decoration: none;
    color: white;
  }

  .iconslinks {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  .iconslinks .fblogo:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.8);
    cursor: pointer;
  }

  .iconslinks .fblogo:hover path{
    fill: white;
  }

  .iconslinks .instalogo:hover{
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.8);
    cursor: pointer;
  }

  .iconslinks .instalogo:hover path{
    fill: white;
  }

  @media (max-width: 768px) {
    padding-top: 15%;
    padding-bottom: 15%;
    .Logo {
      width: 50%;
    }
  }
`;

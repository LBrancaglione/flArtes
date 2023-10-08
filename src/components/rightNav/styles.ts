import styled from "styled-components";

export const rightNav = styled.ul<{ open?: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0px 20px;

  @font-face {
    font-family: montSerrat-ExtraBold ;
    src: url(../../public/Montserrat-ExtraBold.ttf);
  }

  .listItem {
    text-align: center;
    padding: 0px 30px;
    color: #fff;
    font-size: 1rem;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    text-decoration: none;
    font-family: montSerrat-ExtraBold;
    font-size: 18px;
  }

  .listItem:hover {
    font-weight: bolder;
    border: 2px solid #e94d01;
    border-radius: 20px;
    background-color: #e94d01;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #224897;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    margin: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100 !important;

    .listItem {
      color: #fff;
      text-align: center;
      margin-top: 10%;
      padding: 5% 0 5% 0;
    }
  }
`;

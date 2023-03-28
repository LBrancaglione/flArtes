import styled from "styled-components";

export const Card = styled.div`

  @font-face {
    font-family: montSerrat-Regular ;
    src: url(../../public/Montserrat-Regular.ttf);
  }

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card {
  box-shadow: 0 0 10px 5px #e1e5ee;
  border-radius: 0.2rem;
  min-width: 28rem;
  display: flex;

  &__img {
    width: 14rem;
    height: 11rem;
    object-fit: cover;
  }

  &__body {
    margin: 1rem;
    flex-grow: 1;
  }
  &__title {
    font-family: montSerrat-Regular ;
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
  }
  &__description {
    font-family: montSerrat-Regular ;
    line-height: 1.2rem;
  }
  &__price {
    font-family: montSerrat-Regular ;
    font-size: 1.4rem;
    margin-top: 0.6rem;

    &::before {
      content: "$";
      font-family: montSerrat-Regular ;
      font-size: 1rem;
      position: relative;
      top: -0.3rem;
      padding-right: 0.1rem;
    }
  }

  &__btn {
    border: none;
    border-top: 1px solid #e1e5ee;
    background-color: transparent;
    font-family: montSerrat-Regular ;
    font-size: 1rem;
    font-weight: bold;
    color: inherit;
    width: 100%;
    padding-top: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

 .card__btn a{
   text-decoration: none;
   color: black;

   &:hover {
      color: #0e48fe;
    }
 }
}

@media screen and (min-width: 600px) {
  .wrapper {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
  }

  .card {
    flex-direction: column;
    text-align: center;
    min-width: 14rem;

    &__img {
      width: 100%;
      height: 12rem;
    }
  }
}

@media screen and (max-width: 499px) {
  .card {
    flex-direction: column;
    text-align: center;
    min-width: 14rem;

    &__img {
      width: 100%;
      height: 12rem;
    }
  }
  }
`

import { FunctionComponent } from "react";
import * as C from "./styled";

interface CardsProp {
  img: string;
  title: string;
  description: string;
}

export const Cards: FunctionComponent<CardsProp> = (item: CardsProp) => {
  return (
    <C.Card>
      <div className="wrapper">
        <div className="card">
          <img src={item.img} className="card__img" />
          <div className="card__body">
            <h2 className="card__title">{item.title}</h2>
            <p className="card__description">{item.description}</p>
            <button className="card__btn"><a href="https://wa.me/5514991575793">Solicitar Orçamento</a></button>
          </div>
        </div>
      </div>
    </C.Card>
  );
};

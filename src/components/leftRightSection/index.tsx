import * as C from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const LeftRightSection = () => {
  return (
    <C.Container>
      <C.leftContent>
        <div className="leftMain">
          <h1>Seja notado em qualquer lugar</h1>
          <p>
          Transmita confiança e credibilidade ao seu público alvo, seja para mostrar um produto, serviço ou até mesmo entretenimento.
          </p>
          <button>
            <AnchorLink href="#services" className="aboutLink">
              Saiba Mais
            </AnchorLink>
            <div className="lineUnder" />
          </button>
        </div>
      </C.leftContent>
      <C.rightContent />
    </C.Container>
  );
};

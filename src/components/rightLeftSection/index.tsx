import * as C from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const RightLefttSection = () => {
  return (
    <C.Container>
      <C.leftContent />
      <C.rightContent>
        <div className="leftMain">
          <h1>Use os meios digitais a seu favor</h1>
          <p>
          Para se destacar no mundo digital é preciso transmitir a mensagem corretamente, e as imagens possuem um estímulo visual muito grande, por isso capturam toda a atenção em um primeiro momento.
          </p>
          <button>
            <AnchorLink href="#services" className="aboutLink">
              Saiba Mais
            </AnchorLink>
            <div className="lineUnder" />
          </button>
        </div>
      </C.rightContent>
    </C.Container>
  );
};

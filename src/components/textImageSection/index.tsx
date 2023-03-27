import * as C from "./styles";

export const TextImageSection = () => {
  return (
    <C.Container>
      <div className="leftContent">
        <div className="leftText">
          <h1>Gráfica Rápida</h1>
          <p>
            Trabalhamos com materiais impressos de baixa tiragem, realizamos o envio dos produtos via Sedex, o valor do frete varia dependendo da região de entrega. 
          </p>
        </div>
      </div>
      <div className="rightContent">
        <div className="rightText">
          <h1>Design</h1>
          <p>
          Trabalhamos com a criação dos templates seja ele para impressão, ou meios digitais. Para artes digitais o envio é realizado via e-mail ou WhatsApp.
          </p>
        </div>
      </div>
    </C.Container>
  );
};

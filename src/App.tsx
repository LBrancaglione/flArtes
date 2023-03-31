import * as C from "./app.styles";
import * as N from "./components/navbar";
import { Cards } from "./components/cards";
import { LeftRightSection } from "./components/leftRightSection";
import { RightLefttSection } from "./components/rightLeftSection";
import { Footer } from "./components/footer";
import { TextImageSection } from "./components/textImageSection";
import calendario from './images/calendario.jpg'
import placasMdf from './images/placasmdf.jpg'
import redesSociais from './images/redessociais.jpg'
import visitCard from './images/visitCard.jpg'
import panfleto from './images/panfleto.png'
import tags from './images/tags.png'

const App = () => {
  return (
    <C.Body>
      <div id="home">
        <C.Header>
          <N.NavBar />
        </C.Header>
      </div>
      <div id="about">
        <LeftRightSection />
        <RightLefttSection />
      </div>
      <div id="services">
        <TextImageSection />
      </div>
      <div id="products">
        <h1 className="cardTitle">Nossos Serviços</h1>
        <C.cardWrapper>
          <Cards
            img={visitCard}
            title="Cartão de Visita"
            description="9x5cm • Arte + Impressão"
          />
          <Cards
            img={redesSociais}
            title="Redes Sociais"
            description="Feed•Stories•Carrosel•Thumbnail"
          />
          <Cards
            img={placasMdf}
            title="Placas Decorativas"
            description="Placa MDF 20x28cm"
          />
          <Cards
            img={calendario}
            title="Calendário"
            description="Tamanho A4 • Arte + Impressão"
          />
          <Cards
            img={panfleto}
            title="Panfleto"
            description="Arte + Impressão"
          />
           <Cards
            img={panfleto}
            title="Panfleto"
            description="Arte + Impressão"
          />
        </C.cardWrapper>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </C.Body>
  );
};

export default App;

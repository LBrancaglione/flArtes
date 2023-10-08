import { FunctionComponent } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as C from "./styles";

interface NavProp {
  open: boolean;
}

export const RightNav: FunctionComponent<NavProp> = (item: NavProp) => {
  return (
    <C.rightNav open={item.open}>
      <AnchorLink href='#home' className="listItem">Inicio</AnchorLink>
      <AnchorLink href='#about' className="listItem">Sobre</AnchorLink>
      <AnchorLink href='#products' className="listItem">Serviços</AnchorLink>
      <AnchorLink href='#contact' className="listItem">Contato</AnchorLink>
    </C.rightNav>
  );
};

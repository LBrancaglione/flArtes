import { useState } from "react";
import * as C from "./styles";
import { RightNav } from "../rightNav";


export const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <C.StyledBurger onClick={() => setOpen(!open) } open={open}>
      <div />
      <div />
      <div />
    </C.StyledBurger>
    <RightNav open={open}/>
    </>
  );
};

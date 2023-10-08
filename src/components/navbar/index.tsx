import * as C from './styles'
import { BurgerMenu } from '../burgerMenu'

export const NavBar = () => {
    return(
       <C.Nav>
            <div className='logo'>
                <h1 className='logo__title'>FL Artes</h1>
            </div>
            <BurgerMenu/>
       </C.Nav>
    )
}
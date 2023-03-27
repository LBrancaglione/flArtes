import * as C from './styles'
import { BurgerMenu } from '../burgerMenu'
import littleLogo from '../../images/littleLogo.png'

export const NavBar = () => {
    return(
       <C.Nav>
            <div className='logo'>
                <h1 className='logo__title'>FLArtes</h1>
            </div>
            <BurgerMenu/>
       </C.Nav>
    )
}
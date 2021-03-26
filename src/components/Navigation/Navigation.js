import './Navigation.css'
import DarkLogo from '../../assets/Logo/Universe-logo.png'
import LightLogo from '../../assets/Logo/Universe-logo-white.png'
import { useTheme } from '../../contexts/theme-context'
import { useDataContext } from '../../contexts/dataContext'

export const Navigation = ({route, setRoute}) => {
    const {theme:{dark, light}, isDark, setIsDark} = useTheme()
    const {state:{cart}, dispatch} = useDataContext()
    return (
        <div className="navigation" style={isDark ? dark : light}>
            <a href="/">
                <img src={isDark ? LightLogo : DarkLogo} alt='logo'/>
            </a>
            <ul>
                <li onClick={() => {setRoute('products')}}>Products</li>
                <li onClick={() => {setRoute('cart')}}>
                    <div className="badge-container">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="badge">{cart.length}</div>
                    </div>
                </li>
                <li onClick={() => {setRoute('wishlist')}}><i className="fas fa-heart"></i></li>
                <li onClick={() => setIsDark(!isDark)}>
                    {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </li>
            </ul>
        </div>
    )
}
import {useDataContext} from "../../contexts/dataContext"
import "./Cart.css"
import {useTheme} from '../../contexts/theme-context'

export const Cart = () => {
    const {state: {
            cart
        }, dispatch} = useDataContext()
    const {
        theme: {
            dark,
            light
        },
        isDark
    } = useTheme()
    return (
        <div
            style={isDark
            ? dark
            : light}
            className='cart-container'>
            <ul className='cart-list'>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <div class="card text horizontal">
                                <img class='product-image' src={item.image} alt='product'/>
                                <div>
                                    <h2>{item.name}</h2>
                                    <h3>₹ {item.price}/-</h3>
                                </div>

                                <div class="links">
                                    <p>Quantity:</p>
                                    <p>
                                        <button
                                            className="btn primary"
                                            onClick={() => dispatch({type: 'INCREMENT_CART_QUANTITY', payload: item})}>+</button>{item.quantity}
                                        <button
                                            className="btn primary"
                                            onClick={() => dispatch({type: 'DECREMENT_CART_QUANTITY', payload: item})}>-</button>
                                    </p>
                                    <button
                                        class="btn secondary text"
                                        onClick={() => dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: item})}>Remove</button>
                                </div>

                            </div>
                        </li>
                    )
                })}
            </ul>
            <h1 className="total-amount">Total Price: ₹ {cart.length > 0
                    ? cart
                        .map(item => item.price * item.quantity)
                        .reduce((a, b) => a + b)
                    : 0}/-</h1>
        </div>
    )
}
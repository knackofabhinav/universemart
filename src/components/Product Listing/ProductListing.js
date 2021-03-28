import {useDataContext} from "../../contexts/dataContext"
import "./ProductListing.css"
import {useTheme} from '../../contexts/theme-context'

export const ProductListing = () => {
    const {
        theme: {
            dark,
            light
        },
        isDark
    } = useTheme()
    const {state: {
            productlist, addedToCartToast
        }, dispatch} = useDataContext()

    return (
        <div style={isDark
            ? dark
            : light}>
            <ul className='cardlisting'>
                {productlist.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="card"
                            style={isDark
                            ? dark
                            : light}
                            onClick={() => dispatch({type: 'LOAD_THIS_ITEM_ON_PRODUCT_PAGE', payload: item})}>
                            <div className="thumbnail">
                                <img className='image' src={item.image} alt='product'/>
                                <button
                                    className="close"
                                    onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch({type: 'ADD_TO_WISHLIST', payload: item})
                                }}>
                                    {item.flag
                                        ? <i className="fas fa-heart"></i>
                                        : <i className="far fa-heart"></i>}
                                </button>
                            </div>
                            <h2 className="name">{item.name}</h2>
                            <p className='price'>₹ {item.price}/-</p>
                            <button
                                className="btn primary"
                                onClick={(e) => {
                                e.stopPropagation()
                                setTimeout(() => {dispatch({type:'HIDE_CART_TOAST'})}, 3000)
                                dispatch({type: 'ADD_TO_CART', payload: item})
                            }}>Add to Cart</button>
                        </div>
                    )
                })}
            </ul>
                {addedToCartToast && <p className='toast-container'>Added To Cart</p>} 
                
        </div>
    )
}
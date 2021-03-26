import {useEffect} from "react"
import {useDataContext} from "../../contexts/dataContext"
import "./ProductListing.css"
import {useTheme} from '../../contexts/theme-context'
const axios = require('axios');

export const ProductListing = () => {
    const {
        theme: {
            dark,
            light
        },
        isDark,
        setIsDark
    } = useTheme()
    const {state: {
            productlist
        }, dispatch} = useDataContext()

    useEffect(() => {
        (async() => {
            try {
                const dataFromServer = await axios.get('/api/productlist')
                dispatch({type: 'ADDING_DATA_TO_PRODUCTLIST', payload: dataFromServer.data.productlist})
            } catch (error) {
                console.log(error)
            }

        })()
    }, [])

    return (
        <div style={isDark
            ? dark
            : light}>
            <ul className='cardlisting'>
                {productlist.map((item) => {
                    return (
                        <div className="card">
                            <div className="thumbnail">
                                <img className='image' src={item.image} alt='product'/>
                                <button className="close">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                            <h2 className="name">{item.name}</h2>
                            <p className='price'>₹ {item.price}/-</p>
                            <button
                                className="btn primary"
                                onClick={() =>{dispatch({type: 'ADD_TO_CART', payload: item})}}>Add to Cart</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
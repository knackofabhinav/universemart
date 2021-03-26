import {createContext, useContext, useReducer} from 'react';

const DataContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDING_DATA_TO_PRODUCTLIST':
            return {
                ...state,
                productlist: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart.length === 0
                    ? [
                        ...state.cart,
                        action.payload
                    ]
                    : state
                        .cart
                        .map(item => item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : action.payload)
            }
        case 'INCREMENT_CART_QUANTITY':
            return {
                ...state,
                cart: state
                    .cart
                    .map((item) => item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item)
            }
        case 'DECREMENT_CART_QUANTITY':
            return {
                ...state,
                cart: state
                    .cart
                    .map((item) => item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item)
            }
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state, cart: state.cart.filter((item)=>item.id!==action.payload.id)
            }
        
        default:
            break;
    }
    return state
}

const initialState = {
    productlist: [],
    cart: []
}

export const DataProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(reducer, initialState)
    return (
        <DataContext.Provider
            value={{
            state,
            dispatch
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    return useContext(DataContext)
}
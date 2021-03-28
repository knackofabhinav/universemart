import { useDataContext } from "../../contexts/dataContext"

export const Wishlist = () => {
    const {state:{wishlist}} = useDataContext()
    return(
        <div>
            <ul>
            {wishlist.map((item) => {return <li>{item.name}</li>})}
            </ul>
        </div>
    )
}
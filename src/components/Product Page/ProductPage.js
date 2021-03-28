import { useDataContext } from "../../contexts/dataContext"
import './ProductPage.css'
export const ProductPage = () => {
    const {state:{productPage}} = useDataContext()
    console.log(productPage)
    return(
        <div className="product-page-container">
            <div className="product-image-container">
                <img className="product-page-image" src={productPage.image} alt="product"/>
            </div>
            <h1 className="product-name">{productPage.name}</h1>
            <h3 className="product-name">Price: ₹{productPage.price} /-</h3>
            <h2 className="product-name">Product Description</h2>
            <h3>Author: {productPage.description.author.name}</h3>
            {productPage.description.author.about}
            <ul>
            {productPage.description.review.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    )
}
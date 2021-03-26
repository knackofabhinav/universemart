import { useState } from 'react';
import './App.css';
import { Cart } from './components/Cart/Cart';
import {Navigation} from './components/Navigation/Navigation';
import { ProductListing } from './components/Product Listing/ProductListing';
import { Wishlist } from './components/Wishlist/Wishlist';

function App() {
    const [route, setRoute] = useState('products')
    
    return (
        <div className="App">
            <Navigation route={route} setRoute={setRoute}/>
            {route==='products' && <ProductListing />}
            {route==='cart' && <Cart/>}
            {route==='wishlist' && <Wishlist />}
        </div>
    );
}

export default App;

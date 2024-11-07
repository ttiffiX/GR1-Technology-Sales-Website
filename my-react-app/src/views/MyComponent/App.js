import React, {useState} from 'react';
import '../../styles/App.css';
import CartClicked from "../utils/CartClicked";
import SearchBar from "../utils/SearchBar"
import AddToCart from "../utils/AddToCart";
import HandleDate from "../utils/HandleDate";
import PRODUCTS from "./Product";
function App() {
    const [count, setCount] = useState(0); // Store the count in state
    return (
        <div className={"MyApp"}>
            <div className={"navigation"}>
                <div className={"shopName"}>
                    <span>Magic Shop</span>
                </div>
            </div>
            <div className={"header"}>
                <div className={"product"}>
                    <span>Product</span>
                </div>
                <HandleDate/>
                {/*<SearchBar/>*/}
                <button className={"chip-default"}>
                    <span className={"chip-default-text"}>Default</span>
                </button>
                <button className={"chip-AZ"}>
                    <span className={"chip-AZ-text"}>A-Z</span>
                </button>
                <div className={"dropdown"}>
                    <button className={"chip-list"}>
                        <span>List View</span>
                    </button>

                    <div className="dropdown-content">
                        <a href="#">Laptop</a>
                        <a href="#">Keyboard</a>
                        <a href="#">Mouse</a>
                    </div>
                </div>
                <div className={"divider"}/>
            </div>

            <div className="product-grid">
                {PRODUCTS.map((product) => (
                    <div className="product-item">
                        <div className="pic" style={{backgroundImage: `url(${product.image})` }}></div>
                        <div className="foodName">{product.name}</div>
                        <div className="price">{product.price}</div>
                        <AddToCart setCount={setCount}/>
                    </div>

                ))}
            </div>
            <CartClicked count={count}/>
        </div>
    );
}

export default App;

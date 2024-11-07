import React, {useState} from 'react';
// import '../../styles/App.css';
import '../../styles/App.scss';
import CartClicked from "./homefunction/CartClicked";
import SearchBar from "../utils/SearchBar"
import AddToCart from "./homefunction/AddToCart";
import HandleDate from "./homefunction/HandleDate";
import PRODUCTS from "../MyComponent/Product";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [count, setCount] = useState(0); // Store the count in state
    return (
        <div className={"MyApp"}>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={"navigation"}>
                <div className={"shopName"}>
                    <span>Magic Shop</span>
                </div>
                {/*<button className={"login-button"}>Login</button>*/}

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
                        <div className="pic" style={{backgroundImage: `url(${product.image})`}}></div>
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

export default Home
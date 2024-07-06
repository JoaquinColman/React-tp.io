import React from "react";
import "./pages css/Body.css"   
import ImgAdidasZam from "../assets/" 

function body () {
    return (
        <div>
            <div className="main-text">
                <h1>Body</h1>
            </div>
    
            <div className="product-container">
                <ul>
                    <li className="productBox">
                        <img src="ImgAdidasZam" alt="" />
                        <div class="des">
                        <span>Interlude</span>
                        <h3>Shoeshine T-shirt</h3>
                        <div class="ratting">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                    </div>
                    <h4>$22.00</h4>
                    </li>
                    <li className="productBox">
                        <h2></h2>
                        <img src="#" alt="#" />

                    </li>
                    <li className="productBox">
                        <h2></h2>
                        <img src="#" alt="#" />

                    </li>
                    <li className="productBox">
                        <h2></h2>
                        <img src="#" alt="#" />

                    </li>
                </ul>
            </div>
        </div>  
    );
}

export default body
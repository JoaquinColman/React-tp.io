import React from "react";
import "./pages css/ItemListContainer.css"   


const ItemListContainer = ({greeting}) => {
    return (
        <div className="Greeting"><h1>{greeting}</h1></div>
    );
};

export default ItemListContainer
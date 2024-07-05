import { FaShoppingBag } from "react-icons/fa";
function CartWidget() {
    return (
        <div className="cart">
            <FaShoppingBag size="40px" />
            <span className="bagde">4</span>
        </div>

    )
}

export default CartWidget
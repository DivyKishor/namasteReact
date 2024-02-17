import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist";
import { clearCart } from "../../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-8/12 m-auto">
                <button
                    className="m-2 p-2 bg-violet-500 active:bg-violet-700 hover:bg-violet-600 focus:ring focus:outline-none focus:ring-violet-300 text-white rounded-full "
                    onClick={handleClearCart}>
                        Clear Cart
                </button>
                {cartItems.length === 0 && (<h1>Cart is empty</h1>)}
                <Itemlist items={cartItems}/>

            </div>
        </div>
    )
}

export default Cart;
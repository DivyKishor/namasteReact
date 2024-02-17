import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from "../../utils/UserContext";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const online = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between">
            <div className="w-36">
                <img alt="logo" className="logo" src={LOGO_URL}></img>
            </div>
            <div className="">
                <ul className="flex items-center ">
                    <li className="m-4 p-4">{online ? "@": "X" }</li>
                    <li className="m-4 p-4"><Link to="/">Home</Link></li>
                    <li className="m-4 p-4"><Link to="/about">About us</Link></li>
                    <li className="m-4 p-4"><Link to="/contact">Contact us</Link></li>
                    <li className="m-4 p-4"><Link to="/cart"><CiShoppingCart className="text-2xl"/>({cartItems.length})</Link></li>
                    <button className="m-4 p-4" onClick={() => {btnName === "Login" ? setBtnName("Logout"):setBtnName("Login");}}>{btnName}</button>
                    <li className="m-4 p-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
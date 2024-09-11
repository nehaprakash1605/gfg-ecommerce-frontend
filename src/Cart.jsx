import React, { useContext } from "react"
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { ThemeStore } from "./ThemeContext";

let Cart = () => {

    let cartItems = useSelector((store) => store.cart.items);
    let{theme,setTheme} = useContext(ThemeStore)
    let lightTheme = "text-green-800 text-xl font-extrabold" //bg-cyan-50
    let darkTheme = "text-green-800 text-xl font-extrabold bg-cyan-50"

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className={theme=='light'?lightTheme:darkTheme}>
                    <tr >
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {cartItems.map((cartObj,index) => (<CartItem key={index} obj={cartObj.dataObj} quantity={cartObj.quantity}></CartItem>) )}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Cart
import { useContext } from "react";
import { TiStar } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./util/store/cartSlice";
import { Link } from "react-router-dom";


let ProductCard = ({obj}) => {
        let {thumbnail, title, category, price, brand, rating, id} = obj
        let Navigate = useNavigate()
        let cartItems = useSelector((store)=> store.cart.items)

        let {theme} = useContext(ThemeStore)

        let lightTheme = "card bg-base-100 w-96 shadow-xl m-5"
        let darkTheme = "card bg-teal-50 w-96 shadow-xl m-5"

        let handleRedirect = () => {
                Navigate(`/product/${id}`)
        }

        let dispatch = useDispatch();

         let handleAddItem = (event) => {
            dispatch(addCart(obj));
            event.stopPropagation()
         }

         let handleRedirection = (event) => {
            Navigate(`/cart`);
            event.stopPropagation()
         }

         let checkIsAdded = (idx) => {
            let cartIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == idx)
            return cartIdx
        }
    return(
        <>
            <div className={theme=='light'?lightTheme:darkTheme} onClick={handleRedirect}>
                    <figure>
                        <img src={thumbnail} alt="product missing" />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title justify-centre">{title}</h3>
                        <div className="card-actions justify-centre">
                            <div className="badge badge-ghost">{category}</div>
                            {brand !== null && brand !== undefined && brand !== '' && (
                                <div className="badge badge-ghost">{brand}</div>
                            )}
                             <div className="badge badge-ghost">{rating}<TiStar /></div>    
                        </div>
                        <div className="badge badge-accent text-lg">${price}</div>
                        {checkIsAdded(id)!=-1 ?
                          ( 
                            <div className="card-actions justify-end" onClick={handleRedirection}>
                                <button className="bg-orange-400 btn">Go To Cart</button>  
                          </div>
                          ) :
                        
                            (<div className="card-actions justify-end" onClick={handleAddItem}>
                            <button className="btn btn-accent bg-emerald-300">Add Item</button>
                        </div>)
                        }
                        
                    </div>
                </div>
        </>
    )
}

export default ProductCard
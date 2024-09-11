import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useSingleProductDetail from "./util/useSingleProductDetail";
import ReviewCopy from "./util/reveiews/ReviewCopy";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./util/store/cartSlice";
import { Link } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";


let Product = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    
    let {theme, setTheme} = useContext(ThemeStore)
    let lightCardTheme = "card md:card-side bg-base-100 shadow-xl my-auto mx-auto mt-5" //card md:card-side bg-base-100 shadow-xl mt-10 mx-auto
    let darkCardTheme = "card md:card-side bg-teal-700 shadow-xl my-auto mx-auto mt-5"
    let lightCardBodyTheme = "card-body"
    let darkCardBodyTheme = "card-body  text-white"
    let lightCardBodyTheme2 = "card-body border-1 shadow-inner mr-2"
    let darkCardBodyTheme2 = "card-body border-1 shadow-inner  text-white mr-2"


    let cartItems = useSelector((store)=>store.cart.items)

    

    //calling custom hook
    let productDetail = useSingleProductDetail(id)

    
    if (productDetail == null) {
        return (
            <></>
        )
    }

    let { thumbnail, title, category, price, brand, rating, description, warrantyInformation , reviews} = productDetail

    let image = productDetail.images[0];

    

    let isItemAdded = () => {
        return(
            cartItems.findIndex((cartObj) => cartObj.dataObj.id == id)
        )
    }
    return (
        <div className="w-screen bg-cyan-50 h-screen flex-col pt-10 justify-evenly ">
            <div className={theme=='light'?lightCardTheme:darkCardTheme}>
                <figure>
                    <img
                        src={thumbnail}
                        alt="No image" />
                </figure>
                <div className={theme=='light'?lightCardBodyTheme:darkCardBodyTheme}>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        {isItemAdded()!= -1 ? <Link to="/cart" className="bg-orange-400 btn">Go To Cart</Link>:<button className="btn bg-emerald-300" onClick={()=>dispatch(addCart(productDetail))}>Add To Cart</button>}
                        
                    </div>
                </div>
            </div>
            <div className={theme=='light'?lightCardTheme:darkCardTheme}>
                <div className={theme=='light'?lightCardBodyTheme2:darkCardBodyTheme2}>
                    <h2 className="card-title">PRODUCT INFORMATION</h2>
                    <div className="badge badge-accent text-lg">{brand}</div>
                    <div className="badge badge-accent text-lg">{warrantyInformation}</div>
                </div>
                <div className={theme=='light'?lightCardBodyTheme2:darkCardBodyTheme2}>
                    <h2 className="card-title">REVIEWS</h2>
                    <ReviewCopy reviews={reviews}></ReviewCopy>
                </div>
            </div>
        </div>
    )
}

export default Product
import React from "react"
import { useState, useEffect } from "react";


let useSingleProductDetail = (id) => {

    let [productDetail, setProductDetail] = useState(null)

    const product = async () => {
        let data = await fetch(`https://dummyjson.com/products/${id}`);

        let jsonData = await data.json();
        setProductDetail(jsonData)
    }

    useEffect(() => {
        product();
    }, []);

    return productDetail
}

export default useSingleProductDetail
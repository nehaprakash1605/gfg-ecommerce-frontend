import Data from "./Data.js"
import ProductCard from "./ProductCard.jsx"
import { useState, useEffect, useContext } from "react"
import ShimmerUI from "./ShimmerUI.jsx"
import { ThemeStore } from "./ThemeContext.jsx"
import ProductCardAdded from "./ProductCardAdded.jsx"
import { useSelector } from "react-redux"

let Home = () => {
    const [allProductData, setAllProductData] = useState([])
    const [productData, setProductData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    let {theme, setTheme} = useContext(ThemeStore)
    let ProductAdded = ProductCardAdded(ProductCard)
    let cartItems = useSelector((store)=>store.cart.items)

    
    async function getData() {
        const data = await fetch("https://dummyjson.com/products")
        const jsonData = await data.json()
        setAllProductData(jsonData.products)
        setProductData(jsonData.products)
    }

    useEffect(()=>{
        getData();
    },[]);

    if(allProductData.length==0){
        return <ShimmerUI></ShimmerUI>
    }

    let checkIsAdded = (idx) => {
        let cartIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == idx)
        return cartIdx
    }


    let filterByRating = () => {
        let filteredData = allProductData.filter((obj) => {
            return obj.rating > 4;
        });
        setProductData(filteredData);
    };

    let filterByCategory = (category) => {
        let filteredData = allProductData.filter ((obj) => {
            return obj.category == category;
        })

        setProductData(filteredData)
    }

    let handleSearch = (searchString)=>{
        let filteredData = allProductData.filter ((obj) => {
            return obj.title.toLowerCase().includes(searchString.toLowerCase())
        })

        setProductData(filteredData)
        setSearchQuery("")
    }


    let lightTheme = "w-screen bg-cyan-50 flex flex-wrap align-bottom justify-evenly"
    let darkTheme = "w-screen bg-teal-700 flex flex-wrap align-bottom justify-evenly"

    let lightFilterTheme = "w-200 bg-teal-700 flex justify-between"
    let darkFilterTheme = "w-200 bg-teal-50 flex justify-between"
    

    return (
        <>
            <div className="flex-col">
                <div className={theme=='light'?lightFilterTheme:darkFilterTheme}>
                    <ul className="menu menu-vertical lg:menu-horizontal">
                        <li><button onClick={filterByRating}>Top Rated</button></li>
                        <li><button onClick={ () => filterByCategory('beauty') }>Cosmetics</button></li>
                        <li><button onClick={ () => filterByCategory('groceries') }>Groceries</button></li>
                        <li><button onClick={ () => filterByCategory('furniture') }>Furniture</button></li>
                    </ul>
                    <div className="form-control menu-horizontal">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto my-1 mx-2" value={searchQuery} 
                            onChange={(event)=>{setSearchQuery(event.target.value)}}/>
                        <button className="btn btn-circle mr-1 my-1" onClick={()=>{handleSearch(searchQuery)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={theme=='light'?lightTheme:darkTheme}>
                    {
                        productData.map((obj) => {
                            return (
                                checkIsAdded(obj.id)!= -1? (<ProductAdded obj={obj} key={obj.id}></ProductAdded>): (<ProductCard obj={obj} key={obj.id}></ProductCard>)
                                //<ProductAdded obj={obj} key={obj.id}></ProductAdded>
                               // <ProductCard obj={obj} key={obj.id}></ProductCard>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home
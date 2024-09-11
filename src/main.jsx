import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import { lazy, Suspense } from 'react'
import Cart from './Cart.jsx'
import Error from './Error.jsx'
import Product from './Product.jsx'
import ShimmerUI from './ShimmerUI.jsx'
import { store } from './util/store/store.js'
import { Provider } from 'react-redux'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
let Store = lazy(()=> import ("./Store"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/product/:id",
                element: <Product></Product>
            },
            {
                path: "/store",
                element: (<Suspense fallback={<ShimmerUI></ShimmerUI>}> 
                    <Store></Store>
                     </Suspense>),
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
 
)

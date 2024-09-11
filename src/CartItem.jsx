import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeCart } from './util/store/cartSlice';
import {ThemeStore} from './ThemeContext';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ obj, quantity }) => {
    let { title, thumbnail, price, id } = obj;
    let dispatch = useDispatch();
    let {theme,setTheme} = useContext(ThemeStore)

    let lightTheme = "text-l"
    let darkTheme = "text-l bg-teal-700"

    let Navigate = useNavigate()

    let handleRedirect = (id) => {
        Navigate(`/product/${id}`)
    }
    return (

        <tr className={theme=='light'?lightTheme:darkTheme}>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12" onClick={()=>handleRedirect(id)}>
                            <img
                                src={thumbnail}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-lg">{price}</span>
            </td>
            {/* <td ><span><BsPlusSquareFill /></span><span>{quantity}</span><span><FaMinusSquare /></span></td> */}
            <td>
                <div className="flex items-center gap-3">
                    <div >
                        <button onClick={() => dispatch(incrementQuantity(id))}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
                        </button>
                    </div>
                    <div >{quantity}</div>
                    <div >
                        <button onClick={() => dispatch(decrementQuantity(id))}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                        </button>
                    </div>

                </div>
            </td>
            <td>
                <button className="btn btn-sm" onClick={()=> dispatch(removeCart(id))}>Delete</button>
            </td>
        </tr>
    )
}

export default CartItem
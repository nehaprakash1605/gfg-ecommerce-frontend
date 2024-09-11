import React from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Reviews = ({ reviews }) => {
    return (
        
        <>
            <div className="carousel w-full border-1 shadow-inner hover:shadow-indigo-500/40 p-10 rounded-md">

                {
                    reviews.map((obj, index) => (
                        <div id={index} key={index} className="carousel-item w-full flex-col justify-center align-middle">
                            <p className='pl-8'>{obj.comment}</p>
                            <p className='pl-8'>{obj.reviewerName}</p>
                        </div>
                    ))
                }

            </div>
            <div className="flex w-full justify-center gap-8 py-2">
                {
                    reviews.map((obj, index) => (
                        <a href={"#"+index} className="btn btn-xs"><FaRegCircle /></a>
                    ))
                }
            </div>
        </>
    )
}

export default Reviews
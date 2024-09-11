import React from 'react'

const ReviewCopy = ({ reviews }) => {
    const reviewLength = reviews.length;
    return (
        
        <>
            <div className="carousel w-full">

                {
                    reviews.map((obj, index) => (
                        <div id={index} key={index} className="carousel-item relative w-full ">
                        <div className='w-full p-10 flex-col border-1 shadow-inner hover:shadow-indigo-500/40 rounded-md'>
                        <p className='pl-20'>COMMENT: {obj.comment}</p>
                        <p className='pl-20'>REVIEWER: {obj.reviewerName}</p>
                        </div>
                       
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={"#"+(index==0?(reviewLength-1):(index-1))} className="btn btn-circle">❮</a>
                            <a href={"#"+(index==(reviewLength-1)?(0):(index+1))} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}

export default ReviewCopy
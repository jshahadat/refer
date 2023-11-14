import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = ({ category }) => {

    return (


        <div className='felx justify-center text-center items-center'>
            <Link to={`/categories/${category._id}`}>
                <div className="body">
                    <div className=" w-full flex flex-wrap justify-around ">
                        <div className="cardsss ">
                            <h2 className="card-titles font-bold" >{category.categoryName}</h2>
                            <img src={category.image_url}
                                alt="" />
                        </div>
                    </div>
                </div>

            </Link>
        </div>

    );
};

export default Categories;





// <div className='mx-auto'>
//                         <div className="card card-compact lg:w-80 w-96 bg-base-100 shadow-xl">
//                             <figure><img src={category.image_url} alt="" className='h-52 w-full rounded' /></figure>


//                         </div>
//                     </div>

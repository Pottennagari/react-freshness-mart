// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart } from "./Store";
 
// function NonVeg()
// {
//     let dispatch=useDispatch()
//     let NonVegItems=useSelector(state=>state.products.NonVeg)
//     let finalitems=NonVegItems.map((items,index)=>(
//         <li key={index}>
//             {items.name}-${items.price}
//             {/* <button onClick={()=>console.log("product added")}>Add To Cart</button> */}
//             <button onClick={()=>dispatch(addtoCart(items))}>Add to Cart</button>
//         </li>
//     ))
//     return(
//         <>
//         <h1 className='text-primary p-5  fst-italic'>This is Nonveg.jsx file </h1>
//         <ol> {finalitems}</ol>
//         </>
//     )
// }


import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtoCart } from "./Store";

function NonVeg() {
    const dispatch = useDispatch();
    const NonVegItems = useSelector(state => state.products.NonVeg);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = NonVegItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">&emsp;&emsp;&emsp;
            <h1 className="text-primary p-3 fst-italic text-center">🍗 Delicious Non-Veg Dishes 🍖</h1>
            <div className="mb-4 d-flex justify-content-center">
                <input 
                    type="text" 
                    className="form-control w-50 shadow-sm" 
                    placeholder="🔍 Search Non-Veg Items..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="row g-4">
                {filteredItems.map((item, index) => (
                    <div key={index} className={`col-md-4 ${searchTerm ? 'col-md-6' : ''}`}>
                        <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                            <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover', width: searchTerm ? '100%' : 'auto', transition: 'width 0.3s ease-in-out' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title text-dark fw-bold">{item.name} - ${item.price} 🍔</h5>
                                <button 
                                    className="btn btn-success shadow-sm px-4 py-2 mt-2" 
                                    onClick={() => dispatch(addtoCart(item))}>
                                    🛒 Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NonVeg;

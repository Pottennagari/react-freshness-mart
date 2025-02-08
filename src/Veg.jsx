// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart } from "./Store";

// function Veg()
// {
//     let dispatch=useDispatch()
//     let Vegitems=useSelector(state=>state.products.Veg)
//     let finalitems=Vegitems.map((items,index)=>(
//         <li key={index}>
//             {items.name}-${items.price}
//             {/* <button onClick={()=>console.log("product added")}>Add To Cart</button> */}
//             <button onClick={()=>dispatch(addtoCart(items))}>Add to Cart</button>
//         </li>
//     ))
//     return(
//         <>
//         <h1>Veg Items </h1>
//         <ol> {finalitems}</ol>
//         </>
//     )
// }
// export default Veg;

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtoCart } from "./Store";

function Veg() {
    const dispatch = useDispatch();
    const VegItems = useSelector(state => state.products.Veg);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = VegItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">&emsp;&emsp;
            <h1 className="text-success p-3 fst-italic text-center">🥗 Delicious Veg Dishes 🥦</h1>
            <div className="mb-4 d-flex justify-content-center">
                <input 
                    type="text" 
                    className="form-control w-50 shadow-sm" 
                    placeholder="🔍 Search Veg Items..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="row g-4">
                {filteredItems.map((item, index) => (
                    <div key={index} className={`col-md-4 ${searchTerm ? 'col-md-6' : ''}`}>
                        <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                            <img 
                                src={item.image} 
                                className="card-img-top" 
                                alt={item.name} 
                                style={{ 
                                    height: '200px', 
                                    objectFit: 'cover', 
                                    width: searchTerm ? '100%' : 'auto',
                                    transition: 'width 0.3s ease-in-out' 
                                }} 
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-dark fw-bold">{item.name} - ${item.price} 🥕</h5>
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

export default Veg;

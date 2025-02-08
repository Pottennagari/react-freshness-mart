// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart } from "./Store";

// function Sweets()
// { 
//     let dispatch=useDispatch()
//     let SweetItems=useSelector(state=>state.products.Sweets)
//     let finalitems=SweetItems.map((items,index)=>(
//         <li key={index}>
//             <img src={items.image} className="card-img-top" alt={items.name} style={{height:'200px', objectFit:'cover'}} />
//             {items.name}-${items.price}
//             {/* <button onClick={()=>console.log("product added")}>Add To Cart</button> */}
//             <button onClick={()=>dispatch(addtoCart(items))}>Add to Cart</button>
//         </li>
//     ))
//     return(
//         <>
//         <h1 className='text-secondary p-5  fst-italic'>This is Sweets.jsx file </h1>
//         <ol> {finalitems}</ol>
//         </>
//     )
// }
// export default Sweets;



import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtoCart } from "./Store";

function Sweets() { 
    const dispatch = useDispatch();
    const SweetItems = useSelector(state => state.products.Sweets);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter sweets based on search input
    const filteredSweets = SweetItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if search is active
    const isSearching = searchTerm.length > 0;

    return (
        <div className="container mt-5">
            {/* Title */}
            <h1 className="text-secondary p-4 fst-italic text-center">
                🍬 Sweet Delights 🍫
            </h1>

            {/* Search Bar */}
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control shadow-sm border-0 p-3 rounded-pill"
                        placeholder="Search for sweets... 🍩"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Sweet Items Grid */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredSweets.length > 0 ? (
                    filteredSweets.map((item, index) => (
                        <div key={index} className={`col ${isSearching ? "col-md-6" : "col-md-4"}`}>
                            <div className="card shadow-lg border-0 rounded-4">
                                <img 
                                    src={item.image} 
                                    className="card-img-top rounded-top-4"
                                    alt={item.name} 
                                    style={{ 
                                        height: '200px', 
                                        objectFit: 'cover',
                                        width: isSearching ? '100%' : 'auto', // Image expands when searching
                                        transition: 'all 0.3s ease-in-out' // Smooth animation
                                    }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary fw-bold">{item.name}</h5>
                                    <p className="text-success fw-semibold">${item.price}</p>
                                    <button 
                                        className="btn btn-success fw-bold px-4 rounded-pill" 
                                        onClick={() => dispatch(addtoCart(item))}
                                    >
                                        Add to Cart 🛒
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-danger fw-bold">No sweets found! 🍪</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sweets;

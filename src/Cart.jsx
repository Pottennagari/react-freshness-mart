// import { useDispatch, useSelector } from "react-redux";
// import { addpurchaseDetails, clearCart, decreament, increament, remove } from "./Store";
// import { useState } from "react";

// function Cart()
// {
//     let dispatch=useDispatch()
//     let Cartobjects=useSelector(state=>state.cart)

//     let cartitems=Cartobjects.map((item,index)=>(
//         <li key={index}>

//             {item.name}-{item.price}
//             <button onClick={()=>dispatch(increament(item))}> + </button>
//             <button onClick={()=>dispatch(decreament(item))}> - </button>
//                     Quantity:{item.quantity}
//             <button onClick={()=>dispatch(remove(item))}> Remove </button>
            
//         </li>
//     ))
//     //calculate the total price
//     let totalprice=Cartobjects.reduce((sum,item)=>sum+item.quantity*item.price,0);
//     //set the discount percentage
//     let[discountPercentage,setDiscountPercentage]=useState(0);
//     //calculate discount amount
//     let discountAmount=totalprice*discountPercentage/100;
//     let finalAmount=totalprice-discountAmount;
//     let[showDiscount,setShowDiscount]=useState(false);
//     let[cuponCode,setCuponcode]=useState('');
//     let [showCuponCode,setShowCuponCode]=useState(false);
//     let[cuponCodeDiscountPer,setcuponCodeDiscountPer]=useState(0);
//     let handlingCuponPer=()=>{
//         switch(cuponCode.toUpperCase()){
//             case "RATAN10" : setcuponCodeDiscountPer(10); 
//                              setShowCuponCode(true);
//             break;
//             case "RATAN20" : setcuponCodeDiscountPer(20); 
//                              setShowCuponCode(true);
//             break;
//             case "RATAN30" : setcuponCodeDiscountPer(30); 
//                              setShowCuponCode(true);
//             break;
//             case "RATAN40" : setcuponCodeDiscountPer(40); 
//                              setShowCuponCode(true);
//             break;
//             default :alert('Invalid cupon code');
//             setcuponCodeDiscountPer(0);
//         }
//     };
//     let cuponDiscountAmount=totalprice * cuponCodeDiscountPer/100;
//     let handleCompletePurchase=()=>{
//     const purchaseDate=new Date().toLocaleDateString();
//     let purchaseDetails={
//                           date:purchaseDate,
//                           items:[...Cartobjects],
//                           totalprice:totalprice
//     }
//     dispatch(clearCart());
//     dispatch(addpurchaseDetails(purchaseDetails));
//     }
//     return(
//         <>
//         {
//             Cartobjects.length>0?
//             <div>
//         <h1 style={{color:'red'}}>This is cart.jsx file</h1>
//         <ul>{ cartitems}</ul>
//         <p>Your Total Price:{totalprice.toFixed(2)}</p>
 
//         { showDiscount &&
//             <div>
//                 <p style={{color:'green',fontFamily:'initial'}}>Your Discount Applied:{discountPercentage}%</p>
//                 <p style={{color:'red',fontFamily:'-moz-initial'}}>Your Discount Amount:{discountAmount.toFixed(2)}</p>
//             </div>
//         } 
//                 <p>Your Net Amount to Pay:{finalAmount.toFixed(2)}</p>  
//          <button onClick={()=>{setDiscountPercentage(10),setShowDiscount(true)}}>Apply 10% discount</button>
//          <button onClick={()=>{setDiscountPercentage(20),setShowDiscount(true)}}>Apply 20% discount</button>
//          <button onClick={()=>{setDiscountPercentage(30),setShowDiscount(true)}}>Apply 30% discount</button><br/>&emsp;&emsp;
//          <input type="text" value={cuponCode} onChange={(e)=>setCuponcode(e.target.value)} placeholder="Enter Cupon Code" /><br/>&emsp;&emsp;
//          <button onClick={()=> handlingCuponPer()}>Apply Cupon</button>&emsp;&emsp;<br></br>
//        {
//         showCuponCode&&
//         <div>
//             <p>Your Cupon Code Applied:{cuponCode}</p>
//             <p>Your Cupon Code Discount:{cuponDiscountAmount}</p>
//             </div>
//        }
//        <button onClick={handleCompletePurchase}> Complete Purchase</button>
//         </div>
//         :
//         <h1 className='text-danger fs-5 p-5 fst-italic fst-bold'>Your Cart is Empty</h1>
// }
//         </>
//    )
// }
//     export default Cart;
import { useDispatch, useSelector } from "react-redux";
import { addpurchaseDetails, clearCart, decreament, increament, remove } from "./Store";
import { useState } from "react";

function Cart() {
    let dispatch = useDispatch();
    let Cartobjects = useSelector(state => state.cart);

    // Map through cart items
    let cartitems = Cartobjects.map((item, index) => (
        <tr key={index}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>
                <button className="btn btn-sm btn-success mx-1" onClick={() => dispatch(increament(item))}>+</button>
                {item.quantity}
                <button className="btn btn-sm btn-warning mx-1" onClick={() => dispatch(decreament(item))}>-</button>
            </td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={() => dispatch(remove(item))}>Remove</button>
            </td>
        </tr>
    ));

    // Calculate total price
    let totalprice = Cartobjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

    // Discount states
    let [discountPercentage, setDiscountPercentage] = useState(0);
    let discountAmount = (totalprice * discountPercentage) / 100;
    let finalAmount = totalprice - discountAmount;

    // Coupon states
    let [showDiscount, setShowDiscount] = useState(false);
    let [cuponCode, setCuponcode] = useState('');
    let [showCuponCode, setShowCuponCode] = useState(false);
    let [cuponCodeDiscountPer, setcuponCodeDiscountPer] = useState(0);

    // Handle Coupon Code Discounts
    let handlingCuponPer = () => {
        switch (cuponCode.toUpperCase()) {
            case "RATAN10": setcuponCodeDiscountPer(10); setShowCuponCode(true); break;
            case "RATAN20": setcuponCodeDiscountPer(20); setShowCuponCode(true); break;
            case "RATAN30": setcuponCodeDiscountPer(30); setShowCuponCode(true); break;
            case "RATAN40": setcuponCodeDiscountPer(40); setShowCuponCode(true); break;
            default: alert('Invalid coupon code'); setcuponCodeDiscountPer(0);
        }
    };
    let cuponDiscountAmount = (totalprice * cuponCodeDiscountPer) / 100;

    // Handle purchase completion
    let handleCompletePurchase = () => {
        const purchaseDate = new Date().toLocaleDateString();
        let purchaseDetails = { date: purchaseDate, items: [...Cartobjects], totalprice: totalprice };
        dispatch(clearCart());
        dispatch(addpurchaseDetails(purchaseDetails));
    };

    return (
        <div className="container mt-5">
            {Cartobjects.length > 0 ? (
                <>
                    <h2 className="text-danger text-center mb-4">Shopping Cart</h2>

                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{cartitems}</tbody>
                    </table>

                    <p className="fw-bold">Total Price: ${totalprice.toFixed(2)}</p>

                    {showDiscount && (
                        <div className="alert alert-success">
                            <p>Your Discount Applied: {discountPercentage}%</p>
                            <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    <p className="fw-bold">Net Amount to Pay: ${finalAmount.toFixed(2)}</p>

                    {/* Discount Buttons */}
                    <div className="mb-3">
                        <button className="btn btn-primary me-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10% Discount</button>
                        <button className="btn btn-primary me-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20% Discount</button>
                        <button className="btn btn-primary" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30% Discount</button>
                    </div>

                    {/* Coupon Code Input */}
                    <div className="mb-3">
                        <input type="text" className="form-control w-50 d-inline me-2" value={cuponCode} onChange={(e) => setCuponcode(e.target.value)} placeholder="Enter Coupon Code" />
                        <button className="btn btn-info" onClick={handlingCuponPer}>Apply Coupon</button>
                    </div>

                    {showCuponCode && (
                        <div className="alert alert-warning">
                            <p>Your Coupon Code Applied: {cuponCode}</p>
                            <p>Coupon Discount: ${cuponDiscountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Complete Purchase Button */}
                    <button className="btn btn-success mt-3" onClick={handleCompletePurchase}>Complete Purchase</button>
                </>
            ) : (
                <h2 className="text-danger text-center mt-5">Your Cart is Empty</h2>
            )}
        </div>
    );
}

export default Cart;

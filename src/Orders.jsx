// import { useSelector } from "react-redux";
// function Orders()
// {
//     const purchaseHistory=useSelector((state)=>state.purchaseDetails);
//     let finalData=purchaseHistory.map((purchase,index)=>(
//                     <li key={index}>
//                             <p>Date:{purchase.date}</p>
//                             <p>Total Amount:${purchase.totalprice.toFixed(2)}</p>
//                         <ul>
//                             {purchase.items.map((item,itemIndex)=>(
//                                 <li key={itemIndex}>
//                                     {item.name}-${item.price}*{item.quantity}
//                                 </li>
//                             ) 
//                             ) }
//                         </ul>
//                     </li>
//     ))
//     return(
//         <>
//             <h2 className='text-success p-3  fst-italic'>Purchase History</h2>
//             {
//             purchaseHistory.length===0?(
//                 <p className='text-success p-2 fst-italic fs-5 fst-bold'>No Purchase history Available...</p>
//             ) : (
//                 <ul>{finalData}</ul>
//             )
//             }
        
//         </>
//     );
// }

// export default Orders;

import { useSelector } from "react-redux";

function Orders() {
    const purchaseHistory = useSelector((state) => state.purchaseDetails);

    let finalData = purchaseHistory.map((purchase, index) => (
        <div key={index} className="card mb-3 shadow-sm">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">📅 Order Date: {purchase.date}</h5>
            </div>
            <div className="card-body">
                <p className="fw-bold">💰 Total Amount: <span className="text-danger">${purchase.totalprice.toFixed(2)}</span></p>
                <ul className="list-group">
                    {purchase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="list-group-item d-flex justify-content-between">
                            <span>🍽️ {item.name}</span>&emsp;
                            <span>💲{item.price} × {item.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ));

    return (
        <div className="container mt-5">
            <h2 className="text-success p-3 fst-italic text-center">🛍️ Purchase History</h2>
            {purchaseHistory.length === 0 ? (
                <p className="alert alert-warning text-center">⚠️ No Purchase History Available...</p>
            ) : (
                <div>{finalData}</div>
            )}
        </div>
    );
}

export default Orders;

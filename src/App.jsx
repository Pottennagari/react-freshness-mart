// import { BrowserRouter, Link,Route, Routes } from "react-router-dom";
// import Home from "./home";
// import Veg from "./Veg";
// import NonVeg from "./NonVeg";
// import Cart from "./Cart";
// import AboutUs from "./Aboutus";
// import ContactUs from "./ContactUs";
// import "./App.css"
// import Milk from "./Sweets";
// import { useDispatch, useSelector } from "react-redux";
// import NotFound from "./NotFound";
// import Orders from "./Orders";
// import Login from "./Login";
// import { logout } from "./Store";

// function App()
// {
//     const cart=useSelector(state=>state.cart);
//     const totalItems=cart.reduce((sum,item)=>sum + item.quantity,0);
//     let auth=useSelector((state)=>state.auth)
//     let isAuthenticated=auth.isAuthenticated;
//     let user=auth.user;
//     let dispatch=useDispatch();
//     return(
// <BrowserRouter>
// <nav>
// <Link to='/home' className="myclass">Home</Link>
// <Link to='/veg' className="myclass">VegItem</Link>
// <Link to='/nonveg' className="myclass">NonVegItem</Link>
// <Link to='/milk' className="myclass">Sweets</Link>
// <Link to='/cart' className="myclass">Cart <span>{totalItems}</span> </Link>
// <Link to='/order' className="myclass">Orders</Link>
// <Link to='/aboutus' className="myclass">AboutUs</Link>
// <Link to='/contactus' className="myclass">ContactUs</Link>

// {
//     isAuthenticated?(
//         <>
//         <span className="welcome">welcome ,{user} </span>
//         <button onClick={()=>dispatch(logout())}
//         className="logout-btn">logout</button>
//         </>
//     ) : (
//        <Link to="/login" className="myclass">SignIn</Link> 
//     )
// }
// </nav>
// <Routes>
//     <Route path="/home" element={<Home/>} />
//     <Route path="/veg" element={<Veg/>} />
//     <Route path="/nonveg" element={<NonVeg/>} />
//     <Route path="/milk" element={<Sweets/>} />
//     <Route path="/cart" element={<Cart/>} />
//     <Route path="/order" element={<Orders/>} />
//     <Route path="/login" element={<Login/>} />
//     <Route path="/aboutus" element={<AboutUs/>} />
//     <Route path="/contactus" element={<ContactUs/>} />
//     <Route path="*" element={<NotFound/>} />
// </Routes>
// </BrowserRouter>
//     )
// }
// export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import AboutUs from "./Aboutus";
import ContactUs from "./ContactUs";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./NotFound";
import Orders from "./Orders";
import Login from "./Login";
import { logout } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Sweets from "./Sweets";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let auth = useSelector(state => state.auth);
    let isAuthenticated = auth.isAuthenticated;
    let user = auth.user;
    let dispatch = useDispatch();

    return (
        <BrowserRouter>
            {/* Bootstrap Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary  fixed-top">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">MyStore</Link> &emsp;&emsp;&emsp;&emsp;
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><Link to="/home" className="nav-link"><i class="fa-solid fa-house"></i>&emsp;Home</Link></li> &emsp;&emsp;&emsp;&emsp;
                            <li className="nav-item"><Link to="/veg" className="nav-link"><i class="fa-solid fa-carrot"></i>&emsp;Veg Items</Link></li>&emsp;&emsp;
                            <li className="nav-item"><Link to="/nonveg" className="nav-link"><i class="fa-solid fa-drumstick-bite"></i>&emsp;Non-Veg Items</Link></li>&emsp;;&emsp;
                            <li className="nav-item"><Link to="/sweets" className="nav-link"><i class="fa-solid fa-cake-candles"></i>&emsp;Sweets</Link></li>&emsp;&emsp;
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link"><i class="fa-sharp fa-solid fa-cart-shopping"></i>&emsp;
                                    Cart <span className="badge bg-danger">{totalItems}</span>
                                </Link>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            </li>
                            <li className="nav-item"><Link to="/order" className="nav-link"><i class="fa-brands fa-first-order"></i>&emsp;Orders</Link></li>&emsp;&emsp;
                            <li className="nav-item"><Link to="/aboutus" className="nav-link"><i class="fa-solid fa-address-card"></i>&emsp;About Us</Link></li>&emsp;&emsp;&emsp;
                            <li className="nav-item"><Link to="/contactus" className="nav-link"><i class="fa-solid fa-address-book"></i>&emsp;Contact Us</Link></li>&emsp;&emsp;&emsp;
                        </ul>
                        <div className="d-flex">
                            {isAuthenticated ? (
                                <>
                                    <span className="navbar-text me-3 text-warning fst-bold">Welcome, {user}</span>&emsp;&emsp;
                                    <button onClick={() => dispatch(logout())} className="btn btn-outline-light"><i class="fa-solid fa-right-from-bracket"></i>&emsp;Logout</button>
                                </>
                            ) : (
                                <Link to="/login" className="btn btn-light"><i class="fa-solid fa-right-to-bracket"></i>Sign In</Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/veg" element={<Veg />} />
                <Route path="/nonveg" element={<NonVeg />} />
                <Route path="/sweets" element={<Sweets />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Orders />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


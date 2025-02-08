// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function NotFound()
// {
//     const navigate=useNavigate()
//       useEffect(()=>{
//         setTimeout(()=>{
//             navigate("/home")
//         },5000)
//       },[])
//     return(
//         <>
//         <h1>404 Page Not Found</h1>
//         <img src="Image.jpg" width={200} height={200}></img>
//         </>
//     )
// }
// export default NotFound;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="container text-center mt-5">
            <h1 className="text-danger mb-3">🚫 404 - Page Not Found</h1>
            <img src="Image.jpg" width={250} height={250} className="img-fluid mb-4 rounded shadow" alt="Not Found" />
            <p className="text-muted">You will be redirected to the home page in <strong>5 seconds...</strong></p>
            <p className="text-muted">If not, <a href="/home" className="text-primary">click here</a>.</p>
        </div>
    );
}

export default NotFound;

// function Home()
// {
//     return(
//         <>
//         <h1> Welcome To React Class</h1>
//         </>
//     )
// }
// export default Home;
{/* <h1 className='text-success p-5 fst-italic fst-bold'> Welcome To React Class</h1> */}

function Home() {
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="text-center p-5 shadow-lg rounded-3 bg-white">
                <h1 className="display-2 text-success fw-bold fst-italic mb-4">
                    🛒 Welcome to Groceries Hub 🥦🍎
                </h1>
                <p className="lead text-muted">Get fresh and quality groceries delivered to your doorstep!</p>
            </div>
        </div>
    );
}

export default Home;

// function AboutUs()
// {
//     return(
//         <h1 className='text-success p-5 text-decoration-underline fst-italic'>This is Aboutus.jsx file</h1>
//     )
// }
// export default AboutUs;
function AboutUs() {
    return (
        <div className="container mt-5">
            <h1 className="text-success text-center p-3 fst-italic text-decoration-underline">About Us</h1>
            <p className="text-center mb-4">
                Welcome to [Your Company Name]! We are passionate about providing the best quality products and services.
            </p>
            
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-primary">Our Mission</h3>
                    <p>
                        Our mission is to bring high-quality, fresh, and affordable food items to your table with a smile. We value
                        customer satisfaction above all else and aim to deliver excellence in every order.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3 className="text-primary">Our Vision</h3>
                    <p>
                        We envision becoming a leading name in the industry by continuously innovating and expanding our range of
                        offerings. We aim to provide an unforgettable experience to our customers through quality, variety, and
                        excellent service.
                    </p>
                </div>
            </div>

            <div className="text-center mt-5">
                <h4 className="text-info">Contact Us</h4>
                <p>Have any questions or need more information? Feel free to reach out to us anytime!</p>
            </div>
        </div>
    );
}

export default AboutUs;

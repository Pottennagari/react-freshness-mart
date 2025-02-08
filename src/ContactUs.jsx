// function ContactUs()
// {
//     return(
//         <h1 className='text-success p-5  fst-italic'>This is contactus.jsx file</h1>
//     )
// }
// export default ContactUs;
function ContactUs() {
    return (
        <div className="container mt-5">
            <h1 className="text-success p-3 fst-italic text-center">Contact Us</h1>
            <p className="text-center">We’d love to hear from you! Please fill out the form below.</p>

            <div className="card shadow-sm">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-4">
        <p className="text-info"><i className="bi bi-envelope-fill"></i> <span>Email:</span>pravallikareddy6305@gmail.com</p>
        <p className="text-success"><i className="bi bi-telephone-fill"></i> Phone: +91 9398592384,</p>
      </div>

        </div>

    );
}
export default ContactUs;

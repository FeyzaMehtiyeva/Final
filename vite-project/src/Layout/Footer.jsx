import React from 'react'

function Footer() {
    return (
        <footer style={{backgroundColor:"rgb(230, 241, 242)"}}>
            <div className='colums' style={{display:"flex"}}>
                <div className='colum'>
                    <h1>Contact Info</h1>
                    <p>70 Washington Square South, New York, NY 10012, United States</p>
                    <p>Email: info@fashionshop.com</p>
                    <p>Phone: (212)555-1234</p>
                </div>


                <div className='colum'>
                    <h1>Our Store</h1>
                    <a href="#">Full Grooming</a>
                    <a href="#">Bath and Dry</a>
                    <a href="#">Styling</a>
                    <a href="#">Medical Bath</a>
                </div>

                <div className='colum'>
                    <h1>Useful Links</h1>
                    <a href="#">Login</a>
                    <a href="#">My account</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Checkout</a>
                   
                </div>

                <div className='colum'>
                    <h1>Sign Up for Email</h1>
                    <p>Subscribe to our newsletter to receive news on update</p>
                    <input type="mail" />
                    <button style={{backgroundColor:"black",color:"white"}}>SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
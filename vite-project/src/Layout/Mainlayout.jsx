import React from 'react'

function Mainlayout() {
  return (
    <>
       <div className='Main' style={{backgroundColor:"rgb(193, 219, 215)"}} >
        <div >
            <p>ELEGANCE IS ELIMINATION</p>
            <h1>Stay Ahead of The Trends</h1>
            <p>Tell your brand's story through images</p>
            <button style={{backgroundColor:"black",color:"white"}}>Collections</button>
        </div>
        <div>

        </div>
       </div>
       <div className='cards'>
         <div>
            <h1>Featured Products</h1>
            <p>We have your occasion covered</p>
         </div>
         <div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_15_360x.png?v=1733810922" alt="" />
                <p>Half sleeve T-shirt</p>
                <p>m.1,110.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_05_720x.png?v=1733818297" alt="" />
                <p>Brown hat craft</p>
                <p>m.994.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_06_360x.png?v=1733810922" alt="" />
                <p>Slim-fit Formal Suit Blazer</p>
                <p>m.992.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_12_360x.png?v=1733810921" alt="" />
                <p>Retro Tie-Dye Color Splash T-Shirt</p>
                <p>m.938.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_14_720x.png?v=1733810921" alt="" />
                <p>Geometric Print Relaxed Fit Tee</p>
                <p>m.1,300.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_10_720x.png?v=1733810921" alt="" />
                <p>Froral Pattern Colorful Summer Tee</p>
                <p>m.1,110.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_04_720x.png?v=1733818314" alt="" />
                <p>Black Hat Craft</p>
                <p>m.751.00</p>
            </div>
            <div>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_14_720x.png?v=1733810921" alt="" />
                <p>Half sleeve T-shirt</p>
                <p>m.1,110.00</p>
            </div>
         </div>
       </div>
    </>
  )
}

export default Mainlayout
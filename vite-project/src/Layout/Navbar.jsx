import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
    <nav>
        <img src="https://rivon-demo.myshopify.com/cdn/shop/files/logo-2.png?v=1734254597&width=130" alt="" />
        <ul style={{display:"flex",gap:"8rem",justifyContent:"center",}}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/pages">Pages</NavLink>
          </li>
          <li>
            <NavLink to="/Shop">Shop</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
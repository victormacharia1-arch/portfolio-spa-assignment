import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="site-header">
            <nav style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '20px'
            }}>
              <Link to="/"style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
              <Link to="/products"style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link>
              <Link to="/add"style={{ textDecoration: 'none', color: 'inherit' }}>Add Product</Link>

            </nav>
            <div className="header-content">
                <h1>Project Portfolio</h1>
                <p className="header-subtitle">Project collection</p>
            </div>
        </header>
    )
}

export default Header;
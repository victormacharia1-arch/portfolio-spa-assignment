import Header from './pages/Header';
import Home from './pages/Home';
import AddProjectForm from './pages/AddProduct';
import ProductList from './pages/ProductList';
import SearchBar from './pages/Searchbar';
import { useState } from "react";
import {starterProjects} from './data';
import{BrowserRouter,Routes, Route, Link} from "react-router-dom";


function App() {
  const [products, setProducts] = useState(starterProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function addProduct(title, description) {
    setProducts((currentProducts) => [
      ...currentProducts,
      { id: Date.now(), title, description },
    ]);
  }

  function deleteProduct(id) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  }

  const filteredProducts = products.filter((product) => {
    const searchableText = `${product.title} ${product.description}`.toLowerCase();
    return searchableText.includes(searchTerm.toLowerCase());
  });

return (
    <BrowserRouter>
      <Header />
      
      
      <nav style={{ padding: '20px', display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add">Add Product</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        

        <Route 
          path="/add"element={<AddProjectForm onAddProject={addProduct} />}/>
        
  
        <Route 
          path="/products" 
          element={
            <ProductList 
              projects={filteredProducts} 
              onDelete={deleteProduct} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
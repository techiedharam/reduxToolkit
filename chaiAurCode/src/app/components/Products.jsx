import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/todo/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activefilterOptions, setactivefilterOptions] = useState({
    category: []
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
      setFilteredProducts(data.products);
    }
  }, [data]);

  const handleActiveChange = (e) => {
    const option = e.target.value;
    setactivefilterOptions((prev) => {
      const existed = prev.category.includes(option);
      let newCategory = existed
        ? prev.category.filter((cat) => cat !== option)
        : [...prev.category, option];
      return { ...prev, category: newCategory };
    });
  };

  useEffect(() => {
    // Live update: filter whenever the selected categories change
    if (activefilterOptions.category.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((fp) => activefilterOptions.category.includes(fp.category))
      );
    }
  }, [activefilterOptions, products]);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", padding: "16px", borderRight: "1px solid #eee" }}>
        <h4>Filter Products</h4>
        <label>
          <input type="checkbox" value="beauty" checked={activefilterOptions.category.includes("beauty")} onChange={handleActiveChange} />
          Beauty
        </label>
        <br />
        <label>
          <input type="checkbox" value="furniture" checked={activefilterOptions.category.includes("furniture")} onChange={handleActiveChange} />
          Furniture
        </label>
        <br />
        <label>
          <input type="checkbox" value="groceries" checked={activefilterOptions.category.includes("groceries")} onChange={handleActiveChange} />
          Groceries
        </label>
      </div>

      {/* Product Container */}
      <div style={{ flex: 1, padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {filteredProducts?.map((prod) => (
            <div key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <h3>{prod.title}</h3>
              <p>{prod.description}</p>
              <p><strong>Brand:</strong> {prod.brand}</p>
              <p><strong>Category:</strong> {prod.category}</p>
              <p><strong>Stock:</strong> {prod.stock} ({prod.availabilityStatus})</p>
              <p><strong>Warranty:</strong> {prod.warrantyInformation}</p>
              <p><strong>Shipping:</strong> {prod.shippingInformation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

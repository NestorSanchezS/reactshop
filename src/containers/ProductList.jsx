import { ProductItem } from "../components/ProductItem";
import { useGetProducts } from "../hooks/useGetProducts";
import "../Styles/ProductList.scss";

export const ProductList = () => {
  const API = "https://api.escuelajs.co/api/v1/products";

  const Products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {Products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

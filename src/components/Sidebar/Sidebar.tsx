import { Product } from "../../store/productSlice";
import "./Sidebar.scss";

const Sidebar = ({ product }: { product: Product }) => {
  return (
    <aside className="sidebar">
      <div className="product">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>
        <hr />
        <div className="tags">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <hr />
      </div>
    </aside>
  );
};

export default Sidebar;

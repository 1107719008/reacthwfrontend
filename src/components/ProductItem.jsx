import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <Card className="bg-gray product">
          
            <div className="product-info">
                
                <h2 className="product-name">
                    {product.name}
                </h2>
                <p className="product-description">
                    {product.description}
                </p>
                <div className="product-more">
                    <Link to={`/products/id/${product.id}`} className="product-link">
                        See ore ...
                    </Link>
                    
                </div>
            </div>
        </Card>
    );
}

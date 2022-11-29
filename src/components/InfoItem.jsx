import { Card } from "antd"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function InfoItem({ info }) {
    const [isVisible, setIsVisible] = useState(true);
    const toggle = () => setIsVisible(!isVisible);
    return (
       
        <Card className="bg-gray product">
          
            <div className="product-info">
                
                <h2 className="product-name">
                    {info.title}
                    
                </h2>
                <p className="product-description">
                    {/*info.description*/}
                    {info.username}
                </p>
                {isVisible?(
                <p className="product-description">
                    {/*info.description*/}
                    {info.content}
                    
                </p>):(
                    <p className="product-description">
                    {/*info.description*/}
                    {info.contentlong}
                    
                </p>
                )}
                <div className="product-more">
                    <Link to={`/infos/id/${info.id}`} className="product-link">
                        See More ...
                    </Link>
                    
                </div>
            </div>
        </Card>
    );
}

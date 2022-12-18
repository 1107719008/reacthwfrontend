import { Card, Row, Col } from "antd"
import { Link } from 'react-router-dom';
import { useState } from "react";
import { LikeIcon } from "./LikeIcon";
import { CommentIcon } from "./CommentIcon";
import InfoList from "./InfoList";

export default function InfoItem({ info }) {
    const [isVisible, setIsVisible] = useState(true);
    const toggle = () => setIsVisible(!isVisible);

    const [isLikeOpen, setIsLikeOpen] = useState(true);
    const toggleLike = () => setIsLikeOpen(!isLikeOpen);
    const [isCommentOpen, setIsCommentOpen] = useState(true);
    const toggleComment = () => setIsCommentOpen(!isCommentOpen);

    return (

        <Card className="bg-gray product">

            <div className="product-info">

                <h2 className="product-name">
                    {info.title}

                </h2>
                <p className="product-description">
                    {/*info.description*/}
                    Author:{info.username}
                </p>
                <div>
                    {isVisible ? (
                        <p className="product-description">
                            {/*info.description*/}
                            {info.content}

                        </p>) : (
                        <p className="product-description">
                            {/*info.description*/}
                            {info.contentlong}

                        </p>
                    )}
                </div>
                <div className="product-more">
                    <div className="product-link"
                        onClick={() => { toggle() }}>

                        See Long info ...

                    </div>
                    <Link to={`/infos/id/${info.id}`} className="product-link">
                        ...
                    </Link>


                </div>
                <div class="iconBox">
                    <div className="likeicon"
                        style={{ padding: "5px" }}
                        onClick={() => { toggleLike() }}>
                        <LikeIcon />
                        <p>{info.like_count}</p>
                    </div>

                    <div
                        style={{ padding: "5px" }}
                        onClick={() => { toggleComment() }}>
                        <CommentIcon />
                        <p className="commentnum">{info.comment_count}</p>
                    </div>
                </div>
                <div>
                    {isLikeOpen ? (
                        <div>
                            <div>
                                hi Like
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    ) : (<span>
                    </span>
                    )}

                </div>
                <div>
                    {isCommentOpen ? (
                        <div>
                            hi comment
                        </div>
                    ) : (<span>
                    </span>
                    )}

                </div>

            </div>
        </Card >
    );
}

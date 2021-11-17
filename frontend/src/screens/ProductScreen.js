import React from "react";
import data from "../data";
// import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.useParams.id);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <div className="row">
        <div className="large">
          <img src={product.image} alt={product.name}></img>
        </div>

        <div className="col-2">
          <h1>{product.name}</h1>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

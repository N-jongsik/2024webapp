import React from "react";
import { useParams } from "react-router-dom";

function ProductComp() {
  const { num } = useParams();
  return (
    <div>
      ProductComp
      {num}
    </div>
  );
}

export default ProductComp;

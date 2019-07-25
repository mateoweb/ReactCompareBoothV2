import React from "react";
import Shops from "./Shops";

const ShopPreview = props => {
  return (
  <div>
    <h1>Sélectionnez le prestataire de votre choix !</h1>
  <Shops {...props} />
  </div>
)};

export default ShopPreview;

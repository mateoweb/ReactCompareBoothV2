import React from "react";
import Shops from "./Shops";


const ShopPreview = props => {
  return (
    <div>
      <h2 id="search_title">Sélectionnez le prestataire de votre choix !</h2>
      <Shops {...props} />
    </div>
  );
};

export default ShopPreview;

import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";

import pinkTshirt from "../images/cover-3.jpg";

function Cart({ basketProps, productQuantity, clearProduct }) {
  // console.log(basketProps);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    // console.log(item);
    // console.log(basketProps.products[item].inCart);

    // Si esta en el carrito
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    // console.log(productsInCart);
  });

  //   const productImages = [pinkTshirt, pinkTshirt, pinkTshirt, pinkTshirt];
  const productImages = (product) => {
    if (product.tagName === "kirbyTshirtUno") {
      return pinkTshirt;
    } else if (product.tagName === "kirbyTshirtDos") {
      return pinkTshirt;
    } else if (product.tagName === "kirbyTshirtTres") {
      return pinkTshirt;
    } else if (product.tagName === "kirbyTshirtCuatro") {
      return pinkTshirt;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    // console.log("My product is");
    // console.log(product);
    return (
      <Fragment key={index}>
        <div className="product">
          <ion-icon
            onClick={() => clearProduct(product.tagName)}
            name="close-circle"
          ></ion-icon>
          <img src={productImages(product)} alt="tShirt kirby :v" />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", product.tagName)}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productQuantity("increase", product.tagName)}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">{basketProps.cartCost},00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);

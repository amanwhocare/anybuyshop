import React, { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assests/remove_icon.png";

const Cartitems = () => {
  const { getTotalcartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div
              className="cartitmes-format"
              style={{
                display: "grid",
                gridTemplateColumns: "0.5fr 2fr 2fr 1fr 1fr 1fr",
                alignItems: "center",
                gap: "73px",
              }}
            >
              <img src={e.image} alt="" className="cartitem-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-qunatity">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
                className="cartremove-icon"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(e.id);
                }}
                alt=""
              />
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-items">
            <p>Subtotal</p>
            <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cartitmes-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitmes-total-items">
            <h3>Total</h3>
            <h3>${getTotalcartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitmes-promocode">
          <p>If you have promo code, Enterit here</p>
          <div className="cartitmes-promobox">
          <input type="text" placeholder="promocode" />
          <button>Submit</button></div></div>
        </div>

      </div>
    
  );
};

export default Cartitems;

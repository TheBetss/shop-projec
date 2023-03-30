

export default function Cart(props) {

  const {quantity = 0, handelBasketShow = Function.prototype} = props
  return (
    <div className="cart blue darken-4 white-text" onClick={handelBasketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}
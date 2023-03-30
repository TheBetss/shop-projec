import BaksetItem from "./BasketItem";

export default function BasketList(props) {
  const { order, dncrementQuantity, incrementQuantity } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return (
              <BaksetItem
                key={item.id}
                {...item}
                removeFromBasket={props.removeFromBasket}
                dncrementQuantity={dncrementQuantity}
                incrementQuantity={incrementQuantity}
              />
            );
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total Price: {totalPrice}
          <b>$</b>
        </li>
        <i
          className="material-icons basket-close"
          onClick={props.handelBasketShow}
        >
          close
        </i>
      </ul>
    </div>
  );
}

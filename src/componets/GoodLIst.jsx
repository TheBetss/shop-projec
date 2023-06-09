// import Nothing from "./404";
import GoodItem from "./GoodItem";

export default function GoodList(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h1>Nothing here</h1>
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
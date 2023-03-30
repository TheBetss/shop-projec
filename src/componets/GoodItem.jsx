export default function GoodItem(props) {
  const { id, name, description, price, full_background, addToBasket } = props;
  console.log(name, full_background)
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img className="image" src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({id, name, price})}>Bye</button>
        <span className="rigth" style={{ fontSize: "1.8rem" }}>
          {price}$
        </span>
      </div>
    </div>
  );
}

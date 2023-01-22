export const Item = (props) => {
  return (
    <div className="item">
      <img className="img" src={props.img} alt={props.itemName} />
      <div>
        <div className="itemTitle">
          <h2>{props.itemName}</h2>
          <h3>{props.price}</h3>
        </div>
        <p>{props.desc}</p>
      </div>
      <button className="orderBtn">Order Now</button>
    </div>
  );
};

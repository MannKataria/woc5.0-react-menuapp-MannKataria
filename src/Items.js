import { Item } from "./Item";

export const Items = (props) => {
  return (
    <div className="items-container">
      {props.menuItems.map((item) => (
        <Item
          img={item.img}
          itemName={item.itemName}
          price={item.price}
          desc={item.desc}
        />
      ))}
      {/* {props.menuItems.map((item) => (
        <Item
          img={item.img}
          itemName={item.itemName}
          price={item.price}
          desc={item.desc}
        />
      ))}
      {props.menuItems.map((item) => (
        <Item
          img={item.img}
          itemName={item.itemName}
          price={item.price}
          desc={item.desc}
        />
      ))} */}
    </div>
  );
};

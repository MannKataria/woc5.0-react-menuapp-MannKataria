import "./App.css";
import { Items } from "./Items";
import { FilterBtns } from "./FilterBtns";
import { useState } from "react";

function App() {
  const menuItems = [
    {
      itemName: "Hamburger",
      price: "$3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Hamburger.jpg",
      category: "lunch",
      isveg: "false",
      popularity: 4,
    },
    {
      itemName: "Pizza",
      price: "$5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/pizza.jpg",
      category: "dinner",
      isveg: "true",
      popularity: 5,
    },
    {
      itemName: "French Fries",
      price: "$2.5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/French fries.jpg",
      category: "lunch",
      isveg: "true",
      popularity: 3,
    },
    {
      itemName: "Cupcakes",
      price: "$2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/cupcakes.jpg",
      category: "dessert",
      isveg: "true",
      popularity: 3,
    },
    {
      itemName: "Turkey Sandwich",
      price: "$5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Turkey-sandwich.jpg",
      category: "breakfast",
      isveg: "false",
      popularity: 2,
    },
    {
      itemName: "Pancakes",
      price: "$4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Pancakes.jpg",
      category: "dessert",
      isveg: "true",
      popularity: 4,
    },
    {
      itemName: "Veg Burger",
      price: "$3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Veg-burger.jpg",
      category: "lunch",
      isveg: "true",
      popularity: 4,
    },
    {
      itemName: "Churros",
      price: "$3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/churros.jpg",
      category: "dessert",
      isveg: "false",
      popularity: 2,
    },
    {
      itemName: "Fried Chicken",
      price: "$10",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Fried-chicken.jpg",
      category: "dinner",
      isveg: "false",
      popularity: 3,
    },
    {
      itemName: "Omelette",
      price: "$2.5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Omelette.jpg",
      category: "breakfast",
      isveg: "false",
      popularity: 5,
    },
    {
      itemName: "Veg Sandwich",
      price: "$5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore autem accusamus laudantium, consequatur quas voluptate provident, modi ducimus reprehenderit, vitae pariatur asperiores cum eveniet.",
      img: process.env.PUBLIC_URL + "images/Veg-sandwich.jpg",
      category: "breakfast",
      isveg: "true",
      popularity: 3,
    },
  ];
  const [newMenuItems, setNewMenuItems] = useState(menuItems);
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const handleChange = () => {
    category === "all"
      ? type === "all"
        ? setNewMenuItems(menuItems)
        : setNewMenuItems(menuItems.filter((item) => item.type === type))
      : type === "all"
      ? setNewMenuItems(menuItems.filter((item) => item.category === category))
      : setNewMenuItems(
          menuItems.filter(
            (item) => item.category === category && item.isveg === type
          )
        );
  };
  return (
    <div className="App">
      <FilterBtns
        handleCategoryChange={(itemCategory) => setCategory(itemCategory)}
        handleTypeChange={(itemType) => setType(itemType)}
        handleChange={handleChange}
      />
      <Items menuItems={newMenuItems} />
    </div>
  );
}

export default App;

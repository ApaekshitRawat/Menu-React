import React, { useState } from "react";
import Categories from "./Categories.js";
import Menu from "./Menu";
import items from "./data";

console.log(
  "A dynamic menu site which gets info from the data provided and also renders the filter  dynamically according to the data provided"
);
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuIteams, setMenuIteams] = useState(items);
  const categories = allCategories;

  const filterItems = (category) => {
    if (category === "all") {
      setMenuIteams(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuIteams(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuIteams} />
      </section>
    </main>
  );
}

export default App;

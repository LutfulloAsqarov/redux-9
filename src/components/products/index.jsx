import React, { useState } from "react";
import { CATEGORY, DATA } from "../../static";
import "./products.scss";

let amount = 4;
const Products = ({ search }) => {
    const [count, setCount] = useState(1);
    const [categoryValue, setCategoryValue] = useState("");

    const filteredProducts = DATA.filter(
        (product) =>
            product.title.toLowerCase().includes(search.toLowerCase().trim()) &&
            ((categoryValue === "all" ? product : "") ||
                product.category === categoryValue)
    );

    let products = filteredProducts?.slice(0, amount * count).map((product) => (
        <div key={product.id} className="products__card">
            <div className="products__card__img">
                <img src={product.image} alt="image" />
            </div>
            <div className="products__card__info">
                <h3 className="products__card__title">{product.title}</h3>
                <p className="products__card__desc">{product.description}</p>
            </div>
        </div>
    ));

    let categories = CATEGORY?.map((category) => (
        <li key={category}>
            <data
                value={category}
                className={`category__item ${
                    categoryValue === category ? "active" : ""
                }`}
                onClick={(e) => setCategoryValue(e.target.value)}
            >
                {category}
            </data>
        </li>
    ));

    return (
        <section className="products container">
            <ul className="category__list">
                <li>
                    <data
                        value="all"
                        className={`category__item ${
                            categoryValue === "all" ? "active" : ""
                        }`}
                        onClick={(e) => setCategoryValue(e.target.value)}
                    >
                        All
                    </data>
                </li>
                {categories}
            </ul>
            <div className="products__cards">{products}</div>
            <button
                className="see__more-btn"
                onClick={() => setCount((p) => p + 1)}
            >
                see more
            </button>
        </section>
    );
};

export default Products;

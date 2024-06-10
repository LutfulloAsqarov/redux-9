import { useState } from "react";
import "./App.css";
import Products from "./components/products";
import Header from "./components/header";

function App() {
    const [search, setSearch] = useState("");

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <Products search={search} />
        </>
    );
}

export default App;

import People from "./components/People";
import Planets from "./components/Planets";
import React, { useState } from "react";
import './index.css';
import { BsFillPeopleFill } from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
function App() {
  const [category, setCategory] = useState("people");
  const handleCategory = (data) => {
    setCategory(data);
  };
  return (
    <div className="App">
      <section className="flex">
        <aside className="capitalize text-xl w-[150px] h-screen p-8 shadow-xl bg-white sticky left-0 top-0 z-50">
          <h3
            className={`mb-7  rounded flex items-center justify-center p-2 cursor-pointer text-black hover:bg-gray-400 ${
              category === "people" ? "bg-gray-400 " : null
            }`}
            onClick={() => handleCategory("people")}
          >
            <BsFillPeopleFill className="text-2xl lg:hidden" />
            <p className="hidden lg:inline-flex">people</p>
          </h3>
          <h3
            className={`mb-7  rounded flex items-center justify-center p-2 cursor-pointer text-black hover:bg-gray-400  ${
              category === "planets" ? "bg-gray-400 " : null
            } `}
            onClick={() => handleCategory("planets")}
          >
            <BiWorld className="text-2xl lg:hidden" />
            <p className=" hidden lg:inline-flex">planets</p>
          </h3>
        </aside>
        <article className="m-0">
          {category === "people" ? <People /> : null}
          {category === "planets" ? <Planets /> : null}
        </article>
      </section>
    </div>
  );
}

export default App;

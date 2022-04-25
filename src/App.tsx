import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, NavBar, RandomUsers, Artist, CoinMarket} from "./vue";

import {  useDispatch } from "react-redux";
import { addinfo } from "./store/redux";



const App: React.FC = () => {

  const [items, setItems] = useState<[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=fr&apiKey=61abc27d0bd247d487ccba2b437618dc"
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch(addinfo(result.articles));
      });

      fetch(
        "https://randomuser.me/api/"
      )
        .then((res) => res.json())
        .then((result) => {
          setItems(result.results);
        });
  }, []);
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/randomUsers" element={<RandomUsers items={items}/>} />
            <Route path="/artist" element={<Artist/>} />
            <Route path="/coinmarket" element={<CoinMarket/>} />
          </Routes>
        </BrowserRouter>
    
    </div>
  );
};

export default App;

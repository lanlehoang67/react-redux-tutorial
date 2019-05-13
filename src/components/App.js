import React from "react";
import './App.css';
import SearchStories from "./SearchStories.js";
import Stories from './Stories'
const App = ()=>
<div className="app">
    <div className="interactions">
    <SearchStories></SearchStories>
    </div>
    <Stories ></Stories>
</div>

export default App;
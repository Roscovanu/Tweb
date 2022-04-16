import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from "./components/AddToList"

export interface IState{
  items:{
    name:string,
    age:string,
    url:string,
    description?:string,
    price?:string
  }[]
}

export interface IState1 extends IState{
  items:{
    name:string,
    age:string,
    url:string,
    description?:string,
    price?:string,
    atetsari?: number,
    examene: number
  }[]
}

function App() {

  const [items, setItems] = useState<IState1["items"]>([
    {
      name:"Roscovanu Dumitru",
      age:"22 ani",
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/800px-Man_silhouette.svg.png",
      description:"Student grupa CR-191",
      examene:21,
      atetsari:4
    },
    {
      name:"Cobuscean Cristi",
      age:"21 ani",
      url:"https://scontent.fbzy1-1.fna.fbcdn.net/v/t1.15752-9/277968849_716314019406777_6823177688738978182_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=YERBsB4f_sMAX_tuIMY&_nc_oc=AQkEOKvAGycmZRXrr4rKkAYZczdAJNIjSbkO0sFnt_FPE9tGXuj_TsGXW7ssI-WidaE&_nc_ht=scontent.fbzy1-1.fna&oh=03_AVL9bfuDcOTVVYQvun9-2W82tVZtOgM1px1uXEAaw68Wzw&oe=6280D8B7",
      description:"Student grupa CR-191",
      examene:43,
      atetsari:6
    }
  ])
  


  return (
    <div className="App">
      <h1>Restantierii</h1>
      <List items={items}/>
      <AddToList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;

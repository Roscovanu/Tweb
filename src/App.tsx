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
    description?:string
  }[]
}

function App() {

  const [items, setItems] = useState<IState["items"]>([
    {
      name:"Roscovanu Dumitru",
      age:"22 ani",
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/800px-Man_silhouette.svg.png",
      description:"Grupa CR-191 ,Buget"
      
    }
    
  ])
  


  return (
    <div className="App">
      <h1>Studentii</h1>
      <List items={items}/>
      <AddToList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;

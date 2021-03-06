import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import ProductCard from "./views/components/ProductCard"

function App() {

let arrBooks = [
  {
    author: "Margaret Atwood",
    title: "The handmaid's tale",
    review: 4,
    desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
    price: 18.99,
    discount: 60,
    image: "Handmaid",
    stock: 7,
  },
  {
    author: "Kevin Kwan",
    title: "Crazy rich asians",
    review: 5,
    desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
    price: 24.12,
    discount: 80,
    image: "Crazy",
    stock: 0,
  },
  {
    author: "Aldous Huxley",
    title: "Brave new world",
    review: 3,
    desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
    price: 18.99,
    discount: 60,
    image: "Brave",
    stock: 3,
  },
  {
    author: "Tara Westover",
    title: "Educated",
    review: 4.5,
    desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
    price: 34.21,
    discount: 0,
    image: "Educated",
    stock: 3,
  },
];

const renderData = ()=>{
 return  (arrBooks.map((val)=>{
    return <ProductCard productData={val}/>
  })
 )
}

  return (
    <div className="App">
      <div className="container-fluid">
      <h1>Product Card</h1>   
        <div className="row">
                    
          {
           
            renderData()
          }
        </div>
      </div>
    </div>
  );
}

export default App;

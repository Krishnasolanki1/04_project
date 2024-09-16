import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import { useEffect, useState } from "react";
const App = () => {
  const [quote,setQuore] = useState(" ");
  const [loding , setLoding] = useState(false);

  useEffect(()=>{
    heandelClick();
  },[]);

  const getQuote = async ()=>{
    const res = await axios('https://dummyjson.com/quotes/random');
    return res?.data?.quote;
  }

  const heandelClick = async ()=>{
    // await console.log(getQuote());
    setLoding(true);
      const quote = await getQuote();
if(quote){
  setQuore(quote);
}else{
  setQuore(" Something went wrong 🤐")
}
setLoding(false);
    
      
  }
  return (
    <>
    <Navbar/>
      <div className="container">
      <QuoteCard heandelClick={heandelClick} quote={quote} loding={loding} />
      </div>
    </>
  );
};

export default App;

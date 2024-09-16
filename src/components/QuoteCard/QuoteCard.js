import Loder from "../Loder";
import "./QuoteCard.css";


const QuoteCard = ({heandelClick , quote , loding}) => {
const heandelLoding = ()=>{
  if(!loding) return quote;
  else return <Loder/>
}

  return (
    <div className="quote__card--container">
      <h3 className="quote__card--heading">Quote</h3>
      <p className="quote__card--quote">
        {heandelLoding()}
      </p>
      <div className="quote__card--line">
        <p className="card__line card__line--1"></p>
        <p className="card__line--2"></p>
        <p className="card__line card__line--3"></p>
      </div>
      <button onClick={heandelClick} className="quote__card--btn">get quote</button>
    </div>
  );
};

export default QuoteCard;

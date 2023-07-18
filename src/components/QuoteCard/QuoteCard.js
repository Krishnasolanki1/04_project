import "./QuoteCard.css";

const QuoteCard = () => {
  return (
    <div className="quote__card--container">
      <h3 className="quote__card--heading">Quote</h3>
      <p className="quote__card--quote">
        Victory is always possible for the person who refuses to stop fighting
      </p>
      <div className="quote__card--line">
        <p className="card__line card__line--1"></p>
        <p className="card__line--2"></p>
        <p className="card__line card__line--3"></p>
      </div>
      <button className="quote__card--btn">get quote</button>
    </div>
  );
};

export default QuoteCard;

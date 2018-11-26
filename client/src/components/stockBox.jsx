import React from 'react';
import styles from '../../Styles/stockBox.css';


function StockBox(props) {
  const stocks = props.stocks;
  const stockList = stocks.map((stock) => 
    <div className={styles.stockBox} key={stock._id}>
      <div className={styles.wrapper}>
        <p className={styles.name}>{stock._fields[0]}</p>
        <div className={styles.ratingHover}>
          <i className="fa fa-tag fa-rotate-90 fa-lg" ></i>
          <span className={styles.rating}>10%</span>
          <p className={styles.ratingBlurb}>lorem.</p>  
      </div>
    </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>${Number(stock._fields[1])}</div>
        <div className={styles.priceChange}>5%</div>
      </div>
    </div>
  )
  return (
    <div>
      {stockList}
    </div>
  )
}

export default StockBox;
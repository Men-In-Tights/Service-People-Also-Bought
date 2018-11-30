import React from 'react';
import styles from '../../Styles/stockBox.css';


function StockBox(props) {
  const stocks = props.stocks;
  const stockList = stocks.map((stock) => 
    <div className={styles.stockBox} key={stock._fields[0].properties.stockId.low}>
      <div className={styles.wrapper}>

        <p className={styles.name}>{stock._fields[0].properties.name}</p>
        <div className={styles.ratingHover}>
          <i className="fa fa-tag fa-rotate-90 fa-lg" ></i>

          <span className={styles.rating}>{stock._fields[0].properties.changeamount.low}%</span>
          <p className={styles.ratingBlurb}>lorem.</p>  
      </div>
    </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>${stock._fields[0].properties.price.low.toLocaleString()}</div>
        <div className={styles.priceChange}>{stock._fields[0].properties.recent.low}%</div>
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
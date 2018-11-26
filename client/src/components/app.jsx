import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx'
import styles from '../../Styles/app.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      count: 0,
    };
  }

  componentDidMount(id = 3) {
    axios.get(`/api/alsoBought/${id}`)
      .then(response => {
        // let data = response.data;
        console.log(response.data);
        this.setState({stocks: response.data})
      })
  }

  onLeftButtonClick() {
    if (this.state.count === 1) {
      document.querySelector('._2EO5AAswT06vZKrgr7rpn0').style.transform = 'translateX(0%)';
      document.querySelector('._2FCFhLCMcko4fqhouEopiz').style.visibility = 'hidden';
      this.state.count = 0;
    } else if (this.state.count === 2) {
      document.querySelector('._2EO5AAswT06vZKrgr7rpn0').style.transform = 'translateX(-33.33%)';
      document.querySelector('.Qlk8d3DU1X1HJpjzZcA8D').style.visibility = 'visible';
      this.state.count = 1;
    }
  }

  onRightButtonClick() {
    if (this.state.count === 0) {
      document.querySelector('._2EO5AAswT06vZKrgr7rpn0').style.transform = 'translateX(-33.33%)';
      document.querySelector('._2FCFhLCMcko4fqhouEopiz').style.visibility = 'visible';
      this.state.count = 1;
    } else if (this.state.count === 1) {
      document.querySelector('._2EO5AAswT06vZKrgr7rpn0').style.transform = 'translateX(-66.66%)';
      document.querySelector('.Qlk8d3DU1X1HJpjzZcA8D').style.visibility = 'hidden';
      this.state.count = 2;
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Carousel stocks={this.state.stocks} 
          moveLeft={this.onLeftButtonClick.bind(this)} 
          moveRight={this.onRightButtonClick.bind(this)} 
          count={this.state.count}
        />
      </div>
    );
  }

}

export default App;
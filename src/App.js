import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";



class App extends Component {
  // Setting this.state.cards to the array
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  gameOver = () => {

    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score} 
      ${this.state.image}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {

    // eslint-disable-next-line array-callback-return
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Wrapper>

            <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
            {this.state.cards.map(card => (
              <Card
                clickCount={this.clickCount}
                id={card.id}
                key={card.id}
                image={card.image}
              />

            ))}

          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


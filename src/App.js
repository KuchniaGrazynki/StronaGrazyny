import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Card, Row, CardColumns } from "react-bootstrap";
import pizzabg from "./res/empytable.jpg";
import recipes from "./res/przepisy.json";
import ReactCardFlip from "react-card-flip";

class FlipPic extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <a onClick={this.handleClick}>
          <Card.Img
            className="top"
            variant="top"
            src={this.props.recipe.zdjecie}
          />
        </a>

        <a onClick={this.handleClick}>
        
          <div class="flip-box-back">
            <div class="prep">{this.props.recipe.przygotowanie}</div>
            {this.props.recipe.skladniki.map(function (ingredient) {
              return <li>{ingredient}</li>;
            })}
          </div>
        </a>
      </ReactCardFlip>
    );
  }
}

class RecipeCard extends React.Component {
  render() {
    return this.props.recipes.map(function (recipe) {
      return (
        <Card border="light" className="card">
          <FlipPic recipe={recipe} />

          <Card.Body>
            <Card.Title>{recipe.tytul}</Card.Title>
            <Card.Text>{recipe.opis}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }
}

function App() {
  return (
    <div className="App">
      <Jumbotron
        className="jumbo"
        style={{
          backgroundImage: `url(${pizzabg})`,
          backgroundSize: "cover",
          padding: "25% 20% 15% 20%",
        }}
        fluid
      >
        <Container>
          <h1>
            <span>PanDa</span>
            <span>🐼</span>
            <span>Tanio</span>
          </h1>
          <p>Na studencką kieszeń z tym co lodówka nawinie!</p>
        </Container>
      </Jumbotron>
      <CardColumns className="columns">
        <RecipeCard recipes={recipes} />
      </CardColumns>
    </div>
  );
}

export default App;

{
  /* <div class="flip-box">
        <div class="flip-box-front">
            <Card.Img className="top" variant="top" src={recipe.zdjecie} />
        </div>
        <div class="flip-box-back">
            {recipe.skladniki.map(function(ingredient){
            return(
            <li>{ingredient}</li>
            )
            })
            }
        </div>
    </div> */
}

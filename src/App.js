import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Card, CardColumns } from "react-bootstrap";
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
    let newPreparation = this.props.recipe.przygotowanie.split("\n").map((item, i) => {
      return <p key={i}>{item}</p>;
    });


    const recipe_pics_path='./res/recipesPics/'

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <a href="#"  className="picture" onClick={this.handleClick}>
          <Card.Img
            className="top"
            variant="top"
            src={require(`${recipe_pics_path+this.props.recipe.zdjecie}`)}
          />
        </a>

        <a style={{ textDecoration: 'none', color: 'black'  }}  href="#" onClick={this.handleClick}>
          <div class="flip-box-back">
            <ul>
              {this.props.recipe.skladniki.map(function (ingredient, i) {
                return <li key={i}>{ingredient}</li>;
              })}
            </ul>
            <div class="prep">{newPreparation}</div>
          </div>
        </a>
      </ReactCardFlip>
    );
  }
}

class RecipeCard extends React.Component {
  render() {
    return this.props.recipes.map(function (recipe, i) {
      let newTitle = recipe.tytul.split("\n").map((item, i) => {
        return <p className="titleP" key={i}>{item}</p>;
      });
      return (
        <Card key={i} border="light" className="card">
          <Card.Body>
            <Card.Title className="cardTitle">{newTitle}</Card.Title>
            <Card.Text>{recipe.opis}</Card.Text>
          </Card.Body>
          <FlipPic recipe={recipe} />
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
          <p>Na studencką kieszeń z tym, co lodówka nawinie!</p>
          <h1>
            <span>PanDa</span>
            <span role="img" aria-label="panda">
              🐼
            </span>
            <span>Tanio</span>
          </h1>
          <div className="pageDesc"></div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <Container>
          <p>
            Hej kochani! Witam Was serdecznie na moim blogu. Mam na imię Ania i
            może nie jestem wybitnym szefem kuchni, za to wiem jak przygotować
            obiad szybko, smacznie i na studencką kieszeń. Będzie mi bardzo
            miło, jeśli moje przepisy przypadną Wam do gustu, tak jak moim
            współlokatorom, dla których najczęściej gotuję. A teraz zapraszam do
            wspólnego gotowania!{" "}
          </p>
        </Container>
      </Jumbotron>
      <CardColumns className="columns">
        <RecipeCard recipes={recipes} />
      </CardColumns>
    </div>
  );
}

export default App;

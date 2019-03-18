import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      allPizzas: [],
      selectedPizza: {},
      topping: "",
      size: "",
      vegetarian: ""
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(allPizzas =>
        this.setState({
          allPizzas
        })
      );
  };

  handleEditClick = pizza => {
    this.setState({
      selectedPizza: pizza,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    });
  };

  handleToppingChange = e => {
    this.setState({ topping: e.target.value });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  handleVegetarianChange = e => {
    this.setState({ vegetarian: !this.state.vegetarian });
  };

  handleSubmit = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
      .then(res => res.json())
      .then(json => {
        fetch("http://localhost:3000/pizzas")
          .then(res => res.json())
          .then(allPizzas =>
            this.setState({
              allPizzas: allPizzas,
              selectedPizza: {},
              topping: "",
              size: "",
              vegetarian: ""
            })
          );
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.selectedPizza}
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          handleToppingChange={this.handleToppingChange}
          handleSizeChange={this.handleSizeChange}
          handleVegetarianChange={this.handleVegetarianChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList
          allPizzas={this.state.allPizzas}
          handleEditClick={this.handleEditClick}
        />
      </Fragment>
    );
  }
}

export default App;

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella, pepperoni, and tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "The Margherita Pizza",
      description: "Tomato sauce, mozzarella, and basil",
    }),
    React.createElement(Pizza, {
      name: "The Veggie Pizza",
      description: "Tomato sauce, mozzarella, and vegetables",
    }),
    React.createElement(Pizza, {
      name: "The Meat Pizza",
      description: "Tomato sauce, mozzarella, and meat",
    }),
    React.createElement(Pizza, {
      name: "The Cheese Pizza",
      description: "Tomato sauce, mozzarella, and cheese",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

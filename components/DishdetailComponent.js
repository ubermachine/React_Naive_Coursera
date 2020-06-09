import React, { Component } from "react";

import { Text, View, FlatList } from "react-native";
import { Card } from "react-native-elements";

import { DISHES } from "../shared/dishes";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  static navigationOptions = {
    title: "Dish details",
  };

  render() {
    const dishId = this.props.route.params?.dishId;

    return <RenderDish dish={this.state.dishes[+dishId]} />;
  }
}
function RenderDish(props) {
  //console.log(props)
  const dish = props.dish;
  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        image={require("./images/uthappizza.png")}
      >
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

export default Dishdetail;

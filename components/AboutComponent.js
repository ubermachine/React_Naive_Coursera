import React, { Component } from "react";
import { LEADERS } from "../shared/leaders";

import { Card } from "react-native-elements";
import { Text, ScrollView, FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};
function History() {
  return (
    <Card title="Our History">
      <Text>
        {
          "Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us. \n\n The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.\n"
        }
      </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS,
    };
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderLeader = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          chevron={false}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    return (
      <View>
        <History />

        <Card title="Corporate Leadership">
          <FlatList
            data={this.props.leaders.leaders}
            renderItem={renderLeader}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </View>
    );
  }
}

export default connect(mapStateToProps)(About);

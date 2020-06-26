import React from "react";
import { Text, FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";

import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import { deleteFavorite } from "../redux/ActionCreators";

import Swipeout from "react-native-swipeout";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
});

class Favorites extends React.Component {
  static navigationOptions = {
    title: "My Favorites",
  };

  render() {
    const renderFavoriteItem = ({ item, index }) => {
      //PURPOSE: this is the button that will appear after swipe, it is defined in array
      const rightButton = [
        {
          text: "Delete",
          type: "delete",
          onPress: () => {
            this.props.deleteFavorite(item.id);
          },
        },
      ];

      return (
        <Swipeout right={rightButton} autoClose={true}>
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => {
              this.props.navigation.navigate("Dishdetail", { dishId: item.id });
            }}
            leftAvatar={{ source: { uri: baseUrl + item.image } }}
          />
        </Swipeout>
      );
    };

    if (this.props.favorites.length === 0) {
      return (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>No favorites.</Text>
        </View>
      );
    } else if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes.dishes.filter((dish) =>
            this.props.favorites.some((el) => el === dish.id)
          )}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

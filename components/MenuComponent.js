import React, { Component } from 'react';
import Dishdetail from "./DishdetailComponent";

import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
console.log(this.props,"kuhiugiu")
        const { navigation} = this.props;


    const renderMenuItem = ({item, index}) => {

        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                   onPress={() => navigation.navigate('Dishdetail',{screen:'Dishdetail',  dishId: item.id })}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                  />
        );
    };


    return (
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}

}
export default Menu;

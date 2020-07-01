import React, { Component } from "react";
import {
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";
import Reservation from "./ReservationComponent";
import Favorites from "./FavoriteComponent";
import NetInfo from "@react-native-community/netinfo";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

const HeaderOptions = {
  headerStyle: {
    backgroundColor: "#512DA8",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    color: "#fff",
  },
};

const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName="Menu"
      screenOptions={HeaderOptions}
    >
      <MenuNavigator.Screen
        name="Menu"
        component={Menu}
        options={({ navigation }) => ({
          headerTitle: "Menu",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <MenuNavigator.Screen
        name="Dishdetail"
        component={Dishdetail}
        options={{ title: "Dish Details" }}
      />
    </MenuNavigator.Navigator>
  );
}
const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={HeaderOptions}
    >
      <HomeNavigator.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: "Home",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </HomeNavigator.Navigator>
  );
}
const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
      initialRouteName="Home"
      screenOptions={HeaderOptions}
    >
      <LoginNavigator.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerTitle: "Login",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </LoginNavigator.Navigator>
  );
}
const ReservationNavigator = createStackNavigator();

function ReservationNavigatorScreen() {
  return (
    <ReservationNavigator.Navigator
      initialRouteName="Home"
      screenOptions={HeaderOptions}
    >
      <ReservationNavigator.Screen
        name="Reservation"
        component={Reservation}
        options={({ navigation }) => ({
          headerTitle: "Reserve Table",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </ReservationNavigator.Navigator>
  );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
  return (
    <ContactNavigator.Navigator
      initialRouteName="Home"
      screenOptions={HeaderOptions}
    >
      <ContactNavigator.Screen
        name="Contact"
        component={Contact}
        options={({ navigation }) => ({
          headerTitle: "Contact Us",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </ContactNavigator.Navigator>
  );
}
const HistoryNavigator = createStackNavigator();

function HistoryNavigatorScreen() {
  return (
    <HistoryNavigator.Navigator screenOptions={HeaderOptions}>
      <HistoryNavigator.Screen
        name="Contact"
        component={About}
        options={({ navigation }) => ({
          headerTitle: "About Us",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </HistoryNavigator.Navigator>
  );
}
const FavoritesNavigator = createStackNavigator();

function FavoritesNavigatorScreen() {
  return (
    <FavoritesNavigator.Navigator screenOptions={HeaderOptions}>
      <FavoritesNavigator.Screen
        name="Favorites"
        component={Favorites}
        options={({ navigation }) => ({
          headerTitle: "My Favorites",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
              iconStyle={{ marginLeft: 10 }}
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </FavoritesNavigator.Navigator>
  );
}

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator();

function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: "white",
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: "black",
      }}
      drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
    >
      <MainNavigator.Screen
        name="Login"
        component={LoginNavigatorScreen}
        options={{
          title: "Login",
          drawerLabel: "Login",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="sign-in"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Home"
        component={HomeNavigatorScreen}
        options={{
          title: "Home",
          drawerLabel: "Home",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon name="home" type="font-awesome" size={24} color={tintColor} />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Menu"
        component={MenuNavigatorScreen}
        options={{
          title: "Menu",
          drawerLabel: "Menu",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon name="list" type="font-awesome" size={24} color={tintColor} />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Contact"
        component={ContactNavigatorScreen}
        options={{
          title: "Contact us",
          drawerLabel: "Contact us",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="address-card"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        }}
      />
      <MainNavigator.Screen
        name="About"
        component={HistoryNavigatorScreen}
        options={{
          title: "About us",
          drawerLabel: "About Us",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="info-circle"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Favorites"
        component={FavoritesNavigatorScreen}
        options={{
          title: "My Favorites",
          drawerLabel: "My Favorites",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="heart"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Reservation"
        component={ReservationNavigatorScreen}
        options={{
          title: "Reserve Table",
          drawerLabel: "Reserve Table",
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="cutlery"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        }}
      />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    // NetInfo.fetch().then((state) => {
    //   ToastAndroid.show(
    //     "Initial Network Connectivity Type: " +
    //       state.type +
    //       ", Connected " +
    //       state.isConnected,
    //     ToastAndroid.LONG
    //   );
    // });
    const unsubscribe = NetInfo.addEventListener((state) => {
      this.handleConnectivityChange(state);
    });
  }

  componentWillUnmount() {
    unsubscribe();
  }
  handleConnectivityChange = (connectionInfo) => {
    switch (connectionInfo.type) {
      case "none":
        ToastAndroid.show("You are now offline!", ToastAndroid.LONG);
        break;
      case "wifi":
        ToastAndroid.show("You are now connected to WiFi!", ToastAndroid.LONG);
        break;
      case "cellular":
        ToastAndroid.show(
          "You are now connected to Cellular!",
          ToastAndroid.LONG
        );
        break;
      case "unknown":
        ToastAndroid.show(
          "You now have unknown connection!",
          ToastAndroid.LONG
        );
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

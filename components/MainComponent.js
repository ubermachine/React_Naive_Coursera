import React, { Component } from "react";
import {
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import AboutUs from "./AboutComponent";
import { Icon } from "react-native-elements";

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
        component={AboutUs}
        options={({ navigation }) => ({
          headerTitle: "About Us",
          headerTitleAlign: "left",
          headerLeft: () => (
            <Icon
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
        name="AboutUs"
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
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
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

export default Main;

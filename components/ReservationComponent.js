import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Picker,
  Switch,
  Button,
  Modal,
  Alert,
} from "react-native";

import { Card } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import * as Animatable from "react-native-animatable";
class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: 1,
      smoking: false,
      date: "",
      showModal: false,
    };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleReservation() {
    this.toggleModal();
  }

  resetForm() {
    this.setState({
      guests: 1,
      smoking: false,
      date: "",
      // showModal: false,
    });
  }

  render() {
    const rightButton = [
      {
        text: "Delete",
        type: "delete",
        onPress: () => {
          Alert.alert(
            "Reservation confirm",
            "My Alert Msg",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        },
      },
    ];
    return (
      <Animatable.View animation="zoomInUp" duration={2000}>
        <ScrollView>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of Guests</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.guests}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ guests: itemValue })
              }
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
            <Switch
              style={styles.formItem}
              value={this.state.smoking}
              trackColor={{ false: "black", true: "#512DA8" }}
              onValueChange={(value) => this.setState({ smoking: value })}
            ></Switch>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date and Time</Text>
            <DatePicker
              style={{ flex: 2, marginRight: 20 }}
              date={this.state.date}
              format=""
              mode="datetime"
              placeholder="select date and Time"
              minDate="2017-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </View>
          <View style={styles.formRow}>
            <Button
              onPress={() =>
                Alert.alert(
                  "Reservation confirm",
                  `No. of guests: ${this.state.guests}\nSmoking? ${this.state.smoking}\nDate-Time:${this.state.date}`,
                  [
                    {
                      text: "Cancel",
                      onPress: () => this.resetForm(),
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => this.resetForm() },
                  ],
                  { cancelable: false }
                )
              }
              title="Reserve"
              color="#512DA8"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>

          {/* <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.showModal}
            onDismiss={() => this.toggleModal()}
            onRequestClose={() => this.toggleModal()}
          >
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Your Reservation</Text>
              <Text style={styles.modalText}>
                Number of Guests: {this.state.guests}
              </Text>
              <Text style={styles.modalText}>
                Smoking?: {this.state.smoking ? "Yes" : "No"}
              </Text>
              <Text style={styles.modalText}>
                Date and Time: {this.state.date}
              </Text>

              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetForm();
                }}
                color="#512DA8"
                title="Close"
              />
            </View>
          </Modal> */}
        </ScrollView>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#512DA8",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default Reservation;

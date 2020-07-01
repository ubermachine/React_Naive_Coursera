import React, { Component } from "react";

import { Text, View } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";
class Contact extends Component {
  sendMail() {
    MailComposer.composeAsync({
      recipients: ["confusion@food.net"],
      subject: "Enquiry",
      body: "To whom it may concern:",
    });
  }
  render() {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <View>
          <Card title="Contact Information">
            <Text style={{ margin: 10, lineHeight: 50, fontSize: 18 }}>
              {`121, Clear Water Bay Road
  Clear Water Bay, Kowloon
  HONG KONG
  Tel: +852 1234 5678
  Fax: +852 8765 4321
  Email:confusion@food.net`}
            </Text>
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "#512DA8" }}
              icon={
                <Icon name="envelope-o" type="font-awesome" color="white" />
              }
              onPress={this.sendMail}
            />
          </Card>
        </View>
      </Animatable.View>
    );
  }
}

export default Contact;

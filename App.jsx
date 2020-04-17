import React, { Component } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";
import { withFormik } from "formik";
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Coding With Tunde</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(email) => this.props.setFieldValue("email", email)}
          placeholder='email'
        />
        <Text style={styles.validationText}>{this.props.errors.email}</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(password) =>
            this.props.setFieldValue("password", password)
          }
          placeholder='enter password'
          secureTextEntry
        />
        <Text style={styles.validationText}>{this.props.errors.password}</Text>
        <Button
          title='Login'
          raised
          onPress={() => {
            this.props.handleSubmit();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 18,
    marginBottom: 32,
  },
  validationText: {
    marginTop: 8,
    marginBottom: 8,
    color: "red",
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: "#B5B4BC",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});
export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Password is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "invalid Email Address";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 10) {
      errors.password = "Minimum length of password is ten Characters";
    }
    return errors;
  },
  handleSubmit: (values, { props }) => {
    console.log(values);
  },
})(App);

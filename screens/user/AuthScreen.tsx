import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';
import { color } from 'react-native-reanimated';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state: any, action: any) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const SignUp = (props: { navigation: { navigate: { (arg0: string): void; (arg0: string): void; }; }; }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      phonenumber: ''
    },
    inputValidities: {
      email: false,
      password: false,
      firstname: false,
      lastname: false,
      phonenumber: false
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
      const action = authActions.signup(
        {
        email: formState.inputValues.email,
        password: formState.inputValues.password,
        firstname: formState.inputValues.firstname,
        lastname: formState.inputValues.lastname,
        phonenumber: formState.inputValues.phonenumber
        }
      );

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate('Startup');
    } catch (err) {
      console.log(error)
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
      <LinearGradient colors={['white', 'white']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
              <Input
                id="firstname"
                label="First Name"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="Please enter a first name."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="lastname"
                label="Last Name"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="Please enter a valid last name."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="phonenumber"
                label="Phone Number"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="Please enter a valid phonenumber."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                <Button
                  title={'Sign Up'}
                  color='black'
                  onPress={authHandler}
                />
              )}
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#f0ffa5',
    paddingVertical: 73,
    paddingHorizontal: 20
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default SignUp;

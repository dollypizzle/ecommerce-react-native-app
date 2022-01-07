import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as productsActions from '../../store/actions/products';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';
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
const AddProductScreen = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: '',
      image:  '',
      description:  '',
      price: '',
      brand: '',
    },
    inputValidities: {
      name: false,
      image: false,
      description: false,
      price: false,
      brand: false,
    },
    formIsValid: false
  });
  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);
  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        { text: 'Okay' }
      ]);
      return;
    }
    setError(null);
    setIsLoading(true);
    try 
       {
        dispatch(
        productsActions.createProduct(
          formState.inputValues.name,
          formState.inputValues.description,
          formState.inputValues.image,
          formState.inputValues.brand,
          +formState.inputValues.price
        )
      );
        props.navigation.goBack();
      } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, formState]);
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
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  
  return (
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="name"
            label="Name"
            errorText="Please enter a valid name!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            required
          />
          <Input
            id="image"
            label="Image Url"
            errorText="Please enter a valid image url!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            required
          />
          <Input
            id="price"
            label="Price"
            errorText="Please enter a valid price!"
            keyboardType="decimal-pad"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            required
            min={0.1}
          />
          <Input
            id="brand"
            label="Brand"
            errorText="Please enter a brand name!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            required
          />
          <Input
            id="description"
            label="Description"
            errorText="Please enter a valid description!"
            keyboardType="default"
            autoCapitalize="sentences"
            multiline
            numberOfLines={3}
            onInputChange={inputChangeHandler}
            required
          />
          <View style={styles.button}>
            <Button   
              title={'Submit'}
              color={Colors.primary}
              onPress={submitHandler}
            />
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  button: {
    marginTop: 50,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default AddProductScreen;
import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

import Startup from '../screens/Start';
import HeaderButton from '../components/UI/HeaderButton';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const StartupScreen = (props:any) => {

  return (
    <>
      <LinearGradient colors={['brown', 'orange']} style={styles.gradient}>
          <View style={styles.image}>
            <Startup />
          </View>
          <View style={styles.actions}>  
              <Text>Shop with 100% confidence</Text>
          </View>
          <View style={styles.container}>
              <Ionicons 
                  color='red' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-airplane'
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}
              />
              <Ionicons 
                  color='yellow' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-at'
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}
              />
              <Ionicons 
                  color='purple' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-mail'
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}  
              />
              <Ionicons 
                  color='orange' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-beaker'  
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}
              />
          </View>    
          <View style={styles.container}>
              <Ionicons 
                  color='pink' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-bed'
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}
              />
              <Ionicons 
                  color='violet' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-beer'
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}
              />
              <Ionicons 
                  color='cyan' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-bicycle'
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }}
              />
              <Ionicons 
                  color='brown' 
                  style={styles.icon} 
                  size={25} 
                  name='ios-body' 
                  onPress={() => {
                      props.navigation.navigate('Products');
                    }} 
              />
            </View>
        </LinearGradient>   
    </>
  );
};

StartupScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: 'Welcome to Stutord Mart',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  icon: {
   padding: 10,
   backgroundColor: 'grey',
   marginHorizontal: 20,
   borderRadius: 15,
   borderStyle: 'solid',
   borderColor: 'black',
  },
  image: {
    height: '50%',
    marginBottom: -5
  },
  actions: {
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
   gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;

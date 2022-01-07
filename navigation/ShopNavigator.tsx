import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../components/UI/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AddProductScreen from '../screens/user/AddProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import LoginScreen from '../screens/user/LoginScreen';
import StartupScreen from './StartupScreen';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const ProductsStack = (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName="ProductsOverviewScreen"
      
    >
      <Stack.Screen
        name="Stutord Mart"
        component={ProductsOverviewScreen}
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={
                  Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                }
                onPress={() => {
                  props.navigation.navigate('Cart');
                }}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={
                  Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                }
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
      <Stack.Screen 
        name="Product Details" 
        component={ProductDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const OrderStack = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Orders" 
        component={OrdersScreen}
        options={{
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={
                    Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                  }
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const AddProductStack = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Orders" 
        component={OrdersScreen}
        options={{
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={
                    Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                  }
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const AdminStack = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="All Products" 
        component={UserProductsScreen}
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={
                  Platform.OS === 'android' ? 'md-create' : 'ios-create'
                }
                onPress={() => {
                  props.navigation.navigate('Add Product');
                }}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={
                  Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                }
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
      <Stack.Screen 
        name="Add Product" 
        component={AddProductScreen} 
        options={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
      <Stack.Screen 
        name="Edit Product" 
        component={EditProductScreen} 
        options={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const StartupStack = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Startup" 
        component={StartupScreen}
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={
                  Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                }
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Sign Up" 
        component={AuthScreen} 
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={
                  Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                }
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const LoginStack = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={
                  Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                }
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

const BotNav = () =>  {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Products') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Order') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase';
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: Colors.primary
      }}
      >
        <Tab.Screen name="Home" component={StartupStack}/>
        <Tab.Screen name="Products" component={ProductsStack} />
        <Tab.Screen name="Order" component={OrderStack} />
      </Tab.Navigator>
  );
}

const ShopDrawer = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.auth.isAuthenticated);

  console.log('punna', userToken)

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'white',
        labelStyle: { fontFamily: 'open-sans-bold' },
        activeBackgroundColor: Colors.primary,
      }}
      drawerContent={(props: any) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {userToken ? (
              <DrawerItem
                label="Logout"
                style={{ paddingLeft: 30, alignItems: 'center' }}
                inactiveBackgroundColor="red"
                onPress={() => {
                  dispatch(authActions.logout());
                  props.navigation.navigate('Startup');
                }}
              />
            ) : (
              []
            )}  
          </DrawerContentScrollView>
        );
      }}
    >
    <Drawer.Screen 
        name="Products" 
        component={BotNav}
        options={{
          drawerIcon: drawerConfig => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={20}
              color={drawerConfig.color}
            />
          )
        }} 
      />
     {!userToken ? (
      <>  
        <Drawer.Screen 
          name="Sign Up" 
          component={AuthStack} 
          options={{
            drawerIcon: drawerConfig => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-person' : 'ios-create'}
                size={20}
                color={drawerConfig.color}
              />
            )
            
          }}
        />
        <Drawer.Screen 
          name="Login" 
          component={LoginStack} 
          options={{
            drawerIcon: drawerConfig => (
              <Ionicons
                name={Platform.OS === 'android' ? 'ios-person' : 'ios-person'}
                size={20}
                color={drawerConfig.color}
              />
            )
          }} 
        />
      </>    
     ) : (
       <>
        <Drawer.Screen 
          name="Admin" 
          component={AdminStack}
          options={{
            drawerIcon: drawerConfig => (
              <Ionicons
                name={Platform.OS === 'android' ? 'ios-create' : 'ios-create'}
                size={20}
                color={drawerConfig.color}
              />
            )
          }}
        />
      </>  
      )}
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <ShopDrawer />
    </NavigationContainer>
  );
};

export default MainNavigator;
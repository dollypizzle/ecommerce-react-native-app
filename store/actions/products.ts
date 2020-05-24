import Product from '../../models/product';
import { AsyncStorage } from 'react-native';


export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async (dispatch: (arg0: { type: string; products: Product[]; userProducts: Product[]; }) => void) => {
    const user = await AsyncStorage.getItem('user');
    try {
      const response = await fetch(
        'https://noah-ninostyle-api.herokuapp.com/products'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      console.log('RESDATA', resData)
      const loadedProducts = [];

      for (const key in resData) {
        console.log('KEY', key)
        loadedProducts.push(
            new Product(
            resData[key]._id,
            resData[key].ownerId,
            resData[key].name,
            resData[key].image,
            resData[key].brand,
            resData[key].description,
            resData[key].price
          )
        );
      }

      dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts,
        userProducts: loadedProducts   
      });
     
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const deleteProduct = (productId: any) => {
  return async (dispatch: (arg0: { type: string; pid: any; }) => void) => {
    const token = await AsyncStorage.getItem('jwtToken');
    const response = await fetch(
      `https://noah-ninostyle-api.herokuapp.com/products/${productId}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};

export const createProduct = (name: any, image: any, brand: any, description: any, price: number) => {
  return async (dispatch: (arg0: { type: string; productData: { id: any; name: any; image: any; brand: any; description: any; price: any; ownerId: any; }; }) => void) => {
    // any async code you want!
    const user: any = await AsyncStorage.getItem('user');
    const token = await AsyncStorage.getItem('jwtToken');
    const response = await fetch(
      `https://noah-ninostyle-api.herokuapp.com/products`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name, 
          image, 
          brand, 
          description, 
          price,
          ownerId: user._id
        })
      }
    );

    const resData = await response.json();
     

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        name, 
        image, 
        brand, 
        description, 
        price,      
        ownerId: user._id
      }
    });
  };
};  

export const updateProduct = (productId: void, name: any, image: any, brand: any, description: any) => {
  console.log(productId, name)
  return async (dispatch: (arg0: { type: string; pid: any; productData: { name: any; image: any; brand: any; description: any }; }) => void) => {
    const user = await AsyncStorage.getItem('user');
    const token = await AsyncStorage.getItem('jwtToken');
    const response = await fetch(
      `https://noah-ninostyle-api.herokuapp.com/products/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, 
          image, 
          brand, 
          description,   
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: UPDATE_PRODUCT,
      pid: productId,
      productData: {
        name, 
        image, 
        brand, 
        description,     
      }
    });
  };
};
import { ADD_ORDER } from '../actions/orders';
import { LOGOUT } from '../actions/auth';

const initialState: { orders: any } = {
  orders: [],
};

export default (
  state = initialState,
  action: { type: string; orderData: object }
) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = action.orderData;
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    case LOGOUT:
      return initialState;
  }

  return state;
};

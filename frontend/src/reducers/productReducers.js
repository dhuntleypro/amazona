import { PRODUCT_LIST_FAIL } from "../constants/productConstants.js";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants.js";
import { PRODUCT_LIST_REQUEST } from "../constants/productConstants.js";

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

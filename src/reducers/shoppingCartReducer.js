import { ADD_TO_CART, CANCEL_CART, REMOVE_FROM_CART } from "../actions/types";
import { message } from "antd";

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Shopping Cart Reducer Payload: ", action.product);
      let ownerExist = state.some(x => {
        return x.store._id === action.product.owner._id;
      });
      console.log("Owner Exist: ", ownerExist);

      if (!ownerExist) {
        message.success(`Uspešno ste dodali '${action.product.name}' u korpu!`);
        return [
          ...state,
          { store: action.product.owner, products: [action.product] }
        ];
      }

      ///DA LI PROIZVOD VEC POSTOJI U KORPI
      let productExist = state.findIndex(store => {
        return store.products.some(product => {
          return product._id === action.product._id;
        });
      });
      console.log("Product Exist with INDEX: ", productExist);

      let index = state.findIndex(
        x => x.store._id === action.product.owner._id
      );

      if (productExist > -1) {
        message.warning(`'${action.product.name}' je već u korpi!`);
        return state;
      } else {
        let array = state;
        let oldObject = state[index];
        let newObject = {
          store: action.product.owner,
          products: [...oldObject.products, action.product]
        };

        array[index] = newObject;
        ///FEEDBACK MESSAGE(ANT-DESIGN)
        message.success(`Uspešno ste dodali '${action.product.name}' u korpu!`);
        return array;
      }
    case REMOVE_FROM_CART:
      ///PRONACI INDEXE
      let store = state.findIndex(x => x.store._id === action.storeId);
      let item = state[store].products.findIndex(
        x => x._id === action.productId
      );
      let newArray = [...state];
      newArray[store].products.splice(item, 1);

      ///AKO NEMA PROIZVODA IZ PRODAVNICE IZBRISATI JE
      if (newArray[store].products.length < 1) {
        newArray.splice(store, 1);
      }
      message.success("Uspesno ste izbacili proizvod iz korpe!");
      return newArray;
    case CANCEL_CART:
      return [];
    default:
      return state;
  }
};

export default shoppingCartReducer;

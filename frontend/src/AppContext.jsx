import { createContext } from 'react';

const AppContext = createContext();

const defaultState = {
  products: [],
  favorites: [],
  cart: [],
  images: '',
};

const Types = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_CART: 'SET_CART',
  TOGGLE_FAVORITES: 'TOGGLE_FAVORITES',
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case Types.SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case Types.SET_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case Types.TOGGLE_FAVORITES: {
      // ID criado para propósito de verificação
      const productId = action.payload;
      // Lógica que verifica se o item já está nos favoritos
      const isOnFavorites = state.favorites.includes(productId);
      // cópia dos favoritos.
      let favorites = [...state.favorites];

      if (isOnFavorites) {
        favorites = favorites.filter((favorite) => favorite !== productId);
      } else {
        favorites = [...favorites, productId];
      }

      return {
        ...state,
        favorites,
      };
    }

    default: {
      return state;
    }
  }
};

export { defaultState, AppReducer, Types };

export default AppContext;

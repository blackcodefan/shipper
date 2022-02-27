import { createContext, useContext, useReducer } from "react";
import { reducer } from "./layout.reducer";

const LayoutContext = createContext({} as any);

// initial context
const INITIAL_STATE = {
  width: 0,
  filters: {
    pickups: [
      {
        keyword: "shopping-bag",
        color: "secondary",
        string: "pickUp",
      },
      {
        keyword: "delivery",
        color: "primary",
        string: "delivery",
      },
    ],
    sorts: [
      {
        icon: "fire",
        string: "Most popular",
        key: "mostPopular",
      },
      {
        icon: "clock",
        string: "Delivery time",
        key: "deliveryTime",
      },
      {
        icon: "star",
        string: "Rating",
        key: "rating",
      },
    ],
    prices: [
      { key: "0", value: "$" },
      { key: "1", value: "$$" },
      { key: "2", value: "$$$" },
    ],
    dietary: [
      { label: "Vegan", value: "vegan" },
      { label: "Vegetarian", value: "vegetarian" },
      { label: "Gluten Free", value: "glutenFree" },
      { label: "Kosher", value: "kosher" },
      { label: "Halal", value: "halal" },
    ],
    distance: [
      { label: "All", value: "all" },
      { label: "2 mi or less", value: "2mi" },
      { label: "5 mi or less", value: "5mi" },
      { label: "10 mi or less", value: "10mi" },
      { label: "15 mi or less", value: "15mi" },
      { label: "25 mi or less", value: "25mi" },
    ],
  },
  filter: {
    visible: false,
    position: {
      keyword: "location",
      color: "primary",
      string: "",
    },
    type: {
      keyword: "shopping-bag",
      color: "secondary",
      string: "Pick up",
    },
    sort: {
      icon: "fire",
      string: "Most popular",
      key: "mostPopular",
    },
    price: { key: "0", low: 0, high: 100 },
    category: [],
  },
  auth: {
    modal: true,
    currentScreen: "login",
    formData: {
      email: "",
    },
  },
  miniCart: {
    visible: false,
    modal: {
      visible: false,
      current: "address",
    },
  },
  checkout: {
    visible: false,
    modal: {
      visible: false,
      current: "card",
    },
  },
  team: {
    create: {
      visible: false,
    },
  },
};

// useAction
const useLayoutAction = (initialLayout = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialLayout);

  const updateWidthHandler = (width) => {
    dispatch({ type: "UPDATE_WIDTH", payload: { width } });
  };
  const updateFilterHandler = (filter) => {
    dispatch({ type: "UPDATE_FILTER", payload: { filter } });
  };

  const updateAuthHandler = (auth) => {
    dispatch({
      type: "UPDATE_AUTH",
      payload: { auth },
    });
  };

  const updateMiniCartHandler = (miniCart) => {
    dispatch({
      type: "UPDATE_MINI_CART",
      payload: { miniCart },
    });
  };

  const updateCheckoutHandler = (checkout) => {
    dispatch({
      type: "UPDATE_CHECKOUT",
      payload: { checkout },
    });
  };

  const updateTeamHandler = (team) => {
    dispatch({
      type: "UPDATE_TEAM",
      payload: { team },
    });
  };

  return {
    state,
    updateWidthHandler,
    updateFilterHandler,
    updateAuthHandler,
    updateMiniCartHandler,
    updateCheckoutHandler,
    updateTeamHandler,
  };
};

// provider
export const LayoutProvider = ({ children }) => {
  const {
    state,
    updateWidthHandler,
    updateFilterHandler,
    updateAuthHandler,
    updateMiniCartHandler,
    updateCheckoutHandler,
    updateTeamHandler,
  } = useLayoutAction();

  return (
    <LayoutContext.Provider
      value={{
        state: state,
        width: state.width,
        filters: state.filters,
        filter: state.filter,
        auth: state.auth,
        miniCart: state.miniCart,
        checkout: state.checkout,
        team: state.team,
        updateWidth: updateWidthHandler,
        updateFilter: updateFilterHandler,
        updateAuthUI: updateAuthHandler,
        updateMiniCart: updateMiniCartHandler,
        updateCheckout: updateCheckoutHandler,
        updateTeam: updateTeamHandler,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

// use context
export const useLayout = () => useContext(LayoutContext);

import { createContext, useContext, useEffect, useReducer } from "react";
import { loadState, saveState } from "utils/local-storage";
import { reducer } from "./product.reducer";

const ProductContext = createContext({} as any);

// initial context
const INITIAL_STATE = {
  foods: [],
  foodCategories: [],
  restaurants: [],
  restaurantCategories: [],
  tags: [],
  featureRestaurants: [],
};

// useAction
const useProductAction = (initialProduct = INITIAL_STATE) => {
  const localState = loadState("product");
  const [state, dispatch] = useReducer(reducer, localState || initialProduct);

  const updateTagHandler = (tags) => {
    dispatch({ type: "UPDATE_TAGS", payload: { tags } });
  };

  const updateRestaurantCategoriesHandler = (restaurantCategories) => {
    dispatch({
      type: "UPDATE_RESTAURANT_CATEGORIES",
      payload: { restaurantCategories },
    });
  };

  const updateRestaurantsHandler = (restaurants) => {
    dispatch({ type: "UPDATE_RESTAURANTS", payload: { restaurants } });
  };

  const updateFoodCategoriesHandler = (foodCategories) => {
    dispatch({
      type: "UPDATE_FOOD_CATEGORIES",
      payload: { foodCategories },
    });
  };

  const updateFoodsHandler = (foods) => {
    dispatch({ type: "UPDATE_FOODS", payload: { foods } });
  };

  const updateFeatureRestaurantsHandler = (ids) => {
    dispatch({ type: "UPDATE_FEATURE_RESTAURANTS", payload: { ids } });
  };

  useEffect(() => {
    saveState("product", state);
  }, [state]);

  return {
    state,
    updateTagHandler,
    updateRestaurantCategoriesHandler,
    updateRestaurantsHandler,
    updateFoodsHandler,
    updateFoodCategoriesHandler,
    updateFeatureRestaurantsHandler,
  };
};

// provider
export const ProductProvider = ({ children }) => {
  const {
    state,
    updateTagHandler,
    updateRestaurantCategoriesHandler,
    updateRestaurantsHandler,
    updateFoodCategoriesHandler,
    updateFoodsHandler,
    updateFeatureRestaurantsHandler,
  } = useProductAction();

  return (
    <ProductContext.Provider
      value={{
        tags: state.tags,
        restaurantCategories: state.restaurantCategories,
        restaurants: state.restaurants,
        foodCategories: state.foodCategories,
        foods: state.foods,
        featureRestaurants: state.featureRestaurants,
        updateTags: updateTagHandler,
        updateRestaurantCategories: updateRestaurantCategoriesHandler,
        updateRestaurants: updateRestaurantsHandler,
        updateFoodCategories: updateFoodCategoriesHandler,
        updateFoods: updateFoodsHandler,
        updateFeatureRestaurants: updateFeatureRestaurantsHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// use context
export const useProduct = () => useContext(ProductContext);

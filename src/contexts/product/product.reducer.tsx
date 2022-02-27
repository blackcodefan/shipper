export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TAGS":
      return { ...state, ...action.payload };
    case "UPDATE_RESTAURANT_CATEGORIES":
      return { ...state, ...action.payload };
    case "UPDATE_RESTAURANTS":
      return { ...state, ...action.payload };
    case "UPDATE_FOOD_CATEGORIES":
      return { ...state, ...action.payload };
    case "UPDATE_FOODS":
      return { ...state, ...action.payload };
    case "UPDATE_FEATURE_RESTAURANTS":
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_WIDTH":
      return { ...state, ...action.payload };
    case "UPDATE_FILTER":
      return { ...state, ...action.payload };
    case "UPDATE_AUTH":
      return { ...state, ...action.payload };
    case "UPDATE_MINI_CART":
      return { ...state, ...action.payload };
    case "UPDATE_CHECKOUT":
      return { ...state, ...action.payload };
    case "UPDATE_TEAM":
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

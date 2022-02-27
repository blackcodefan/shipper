export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GUESTS":
      return { ...state, ...action.payload };
    case "REMOVE_GUEST":
      return { ...state, guests: removeGuestHandler(state, action) };
    case "UPDATE_MANAGES":
      return { ...state, ...action.payload };
    case "UPDATE_MANAGE":
      return { ...state, manages: updateManageHandler(state, action) };
    case "ADD_MANAGE":
      return { ...state, manages: addManageHandler(state, action) };
    case "REMOVE_MANAGE":
      return { ...state, manages: removeManageHandler(state, action) };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const updateManageHandler = (state, action) => {
  const existingItemIndex = state.manages.findIndex(
    (item) => item.id === action.payload.manage.id
  );
  if (existingItemIndex > -1) {
    const newState = [...state.manages];
    newState[existingItemIndex] = action.payload.manage;
    return newState;
  }
};

const removeGuestHandler = (state, action) => {
  const newState = state.guests.filter(
    (item) => item.id !== action.payload.guest.id
  );
  return newState;
};

const removeManageHandler = (state, action) => {
  const newState = state.manages.filter(
    (item) => item.id !== action.payload.manage.id
  );
  return newState;
};

const addManageHandler = (state, action) => {
  console.log(action.payload.manage);
  const id = parseInt(state.manages[state.manages.length - 1].id) + 1;
  const newState = state.manages;
  action.payload.manage.id = id;
  newState.push(action.payload.manage);
  return newState;
};

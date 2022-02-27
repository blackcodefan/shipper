export const loadState = (keyword) => {
  try {
    if (typeof window !== undefined) {
      const serializedState = localStorage.getItem(keyword);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};

export const saveState = (keyword, state) => {
  try {
    if (typeof window !== undefined) {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(keyword, serializedState);
    }
  } catch {
    // ignore write errors
  }
};

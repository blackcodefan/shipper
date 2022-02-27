import { useLayout } from "contexts/layout/layout.use";
import { useContext, useEffect, useReducer } from "react";
import { loadState, saveState } from "utils/local-storage";
import { ProfileContext } from "./profile.context";
import { reducer } from "./profile.reducer";

// initial context
const INITIAL_STATE = {
  profile: {
    id: "1",
    isAuthenticated: false,
    address: {
      street: "300 Post Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "12345",
    },
  },
};

// useAction
const useProfileAction = (initialProfile = INITIAL_STATE) => {
  const localState = loadState("user");
  const [state, dispatch] = useReducer(reducer, localState || initialProfile);

  const updateProfileHandler = (profile) => {
    dispatch({ type: "UPDATE_PROFILE", payload: { profile } });
  };

  useEffect(() => {
    saveState("user", state);
  }, [state]);

  return { state, updateProfileHandler };
};

// provider
export const ProfileProvider = ({ children }) => {
  const { updateWidth } = useLayout();

  useEffect(() => {
    const updateWidthHandler = () => {
      updateWidth(window.innerWidth);
    };
    updateWidthHandler();
    window.addEventListener("resize", () => updateWidthHandler());
    return window.removeEventListener("resize", updateWidthHandler);
  }, []);

  const { state, updateProfileHandler } = useProfileAction();

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        updateProfile: updateProfileHandler,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

// use context
export const useProfile = () => useContext(ProfileContext);

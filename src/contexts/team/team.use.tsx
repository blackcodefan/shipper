import { createContext, useContext, useEffect, useReducer } from "react";
import { loadState, saveState } from "utils/local-storage";
import { reducer } from "./team.reducer";

const TeamContext = createContext({} as any);

// initial context
const INITIAL_STATE = {
  guests: [],
  manages: [],
};

// useAction
const useTeamAction = (initialTeam = INITIAL_STATE) => {
  const localState = loadState("team");
  const [state, dispatch] = useReducer(reducer, localState || initialTeam);

  const updateGuestsHandler = (guests) => {
    dispatch({ type: "UPDATE_GUESTS", payload: { guests } });
  };

  const removeGuestHandler = (guest) => {
    dispatch({ type: "REMOVE_GUEST", payload: { guest } });
  };

  const updateManagesHandler = (manages) => {
    dispatch({ type: "UPDATE_MANAGES", payload: { manages } });
  };

  const updateManageHandler = (manage) => {
    dispatch({ type: "UPDATE_MANAGE", payload: { manage } });
  };

  const addManageHandler = (manage) => {
    dispatch({ type: "ADD_MANAGE", payload: { manage } });
  };

  const removeManageHandler = (manage) => {
    dispatch({ type: "REMOVE_MANAGE", payload: { manage } });
  };

  useEffect(() => {
    saveState("team", state);
  }, [state]);

  return {
    state,
    updateGuestsHandler,
    updateManagesHandler,
    updateManageHandler,
    addManageHandler,
    removeManageHandler,
    removeGuestHandler,
  };
};

// provider
export const TeamProvider = ({ children }) => {
  const {
    state,
    updateGuestsHandler,
    updateManagesHandler,
    updateManageHandler,
    addManageHandler,
    removeManageHandler,
    removeGuestHandler,
  } = useTeamAction();

  return (
    <TeamContext.Provider
      value={{
        guests: state.guests,
        manages: state.manages,
        updateGuests: updateGuestsHandler,
        updateManages: updateManagesHandler,
        updateManage: updateManageHandler,
        addManage: addManageHandler,
        removeManage: removeManageHandler,
        removeGuest: removeGuestHandler,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

// use context
export const useTeam = () => useContext(TeamContext);

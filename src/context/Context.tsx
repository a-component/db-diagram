import * as React from "react";
import { ContextActionTypes, IContext } from "@interface";

export type ContextAction = {
  type: ContextActionTypes.SET_STATE;
  state: IContext;
};

const Context = React.createContext<IContext | null>(null);
const DispatchContext = React.createContext<React.Dispatch<
  ContextAction
> | null>(null);

const ContextReducer = (
  state: IContext,
  action: ContextAction
): IContext => {
  switch (action.type) {
    case ContextActionTypes.SET_STATE:
      return {
        ...state,
        ...action.state,
      };
    default:
      throw new Error("Unhandled action");
  }
};

// Provider
export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(ContextReducer, {
    width: 0,
    height: 0,
    data: {},
  });

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}

export function useContext() {
  const state = React.useContext(Context);
  if (!state) throw new Error("Cannot find Context of db-diagram");
  return state;
}

export function useDispatchContext() {
  const dispatch = React.useContext(DispatchContext);
  if (!dispatch) throw new Error("Cannot find DispatchContext of db-diagram");
  return dispatch;
}

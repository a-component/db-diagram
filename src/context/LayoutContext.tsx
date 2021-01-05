import * as React from "react";
import {
  ILayoutContext,
  LayoutContextActionTypes
} from "@interface";

export type LayoutContextAction =
  | { type: LayoutContextActionTypes.SET_STATE; state: ILayoutContext }
  | { type: LayoutContextActionTypes.SET_HOVER; hover: boolean }
  | {
      type: LayoutContextActionTypes.SET_SCROLL;
      scrollTop: number;
      scrollLeft: number;
    }
  | { type: LayoutContextActionTypes.SET_SCROLL_TOP; scrollTop: number }
  | { type: LayoutContextActionTypes.SET_SCROLL_LEFT; scrollLeft: number }
  | {
      type: LayoutContextActionTypes.SET_LINE_NUMBER_WIDTH;
      lineNumberColumnWidth: number;
    }
  | {
      type: LayoutContextActionTypes.SET_BODY_DIMENSION;
      bodyHeight: number;
      bodyWidth: number;
    }
  | { type: LayoutContextActionTypes.SET_HEADER_HEIGHT; headerHeight: number };

const LayoutContext = React.createContext<ILayoutContext | null>(
  null
);
const DispatchLayoutContext = React.createContext<React.Dispatch<
  LayoutContextAction
> | null>(null);

const LayoutContextReducer = (
  state: ILayoutContext,
  action: LayoutContextAction
): ILayoutContext => {
  switch (action.type) {
    case LayoutContextActionTypes.SET_HOVER:
      return {
        ...state,
        _hover: action.hover
      };
    case LayoutContextActionTypes.SET_SCROLL:
      return {
        ...state,
        _scrollLeft: action.scrollLeft,
        _scrollTop: action.scrollTop
      };
    case LayoutContextActionTypes.SET_SCROLL_TOP:
      return {
        ...state,
        _scrollTop: action.scrollTop
      };
    case LayoutContextActionTypes.SET_SCROLL_LEFT:
      return {
        ...state,
        _scrollLeft: action.scrollLeft
      };
    case LayoutContextActionTypes.SET_STATE:
      return {
        ...state,
        ...action.state
      };
    default:
      throw new Error("Unhandled action");
  }
};

// Provider
export function LayoutContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(LayoutContextReducer, {
    _scrollTop: 0,
    _scrollLeft: 0,
    _hover: false
  });

  return (
    <LayoutContext.Provider value={state}>
      <DispatchLayoutContext.Provider value={dispatch}>
        {children}
      </DispatchLayoutContext.Provider>
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  const state = React.useContext(LayoutContext);
  if (!state) throw new Error("Cannot find LayoutContextProvider of db-diagram");
  return state;
}

export function useDispatchLayoutContext() {
  const dispatch = React.useContext(DispatchLayoutContext);
  if (!dispatch) throw new Error("Cannot find DatagridLayoutContextProvider");
  return dispatch;
}

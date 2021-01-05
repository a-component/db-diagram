export enum ContextActionTypes {
  SET_STATE = "SET_STATE"
}

export enum LayoutContextActionTypes {
  SET_HOVER = "SET_HOVER",
  SET_SCROLL = "SET_SCROLL",
  SET_SCROLL_TOP = "SET_SCROLL_TOP",
  SET_SCROLL_LEFT = "SET_SCROLL_LEFT",
  SET_LINE_NUMBER_WIDTH = "SET_LINE_NUMBER_WIDTH",
  SET_BODY_DIMENSION = "SET_BODY_DIMENSION",
  SET_HEADER_HEIGHT = "SET_HEADER_HEIGHT",
  SET_BODY_HEIGHT = "SET_BODY_HEIGHT",
  SET_STATE = "SET_STATE"
}

type Direction = "left" | "center" | "right";

export interface IDBDiagramCommonProps {
  style?: React.CSSProperties;
}

export interface IDBDiagramProps extends IDBDiagramCommonProps {
  width: number;
  height: number;
  data: Record<string, any>;
  loading?: boolean;
  spinning?: boolean;
}

// local variables
export interface IContext extends IDBDiagramProps {
}

export interface ILayoutContext {
  _hover: boolean;
  _scrollLeft: number;
  _scrollTop: number;
}

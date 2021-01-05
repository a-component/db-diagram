import * as React from "react";
import {
  ContextActionTypes,
  IContext,
  IDBDiagramProps,
  LayoutContextActionTypes
} from "@interface";

import {
  useContext,
  useDispatchContext,
} from "context/Context";
import {
  LayoutContextAction,
  useLayoutContext,
  useDispatchLayoutContext
} from "context/LayoutContext";
import debounce from "lodash.debounce";

const DBDiagram: React.FC<IDBDiagramProps> = props => {
  const {
    children,
    ...restProps
  } = props;
  const context = useContext();
  const layoutContext = useLayoutContext();
  const dispatch = useDispatchContext();
  const layoutDispatch = useDispatchLayoutContext();

  const {  } = context;
  const styles: React.CSSProperties = {};

  const { current: debouncedLayoutDispatch } = React.useRef(
    debounce<(action: LayoutContextAction) => void>(action => {
      layoutDispatch(action);
    }, 300)
  );

  const handleMouseEnter: React.MouseEventHandler = () => {
    debouncedLayoutDispatch.cancel?.();
    debouncedLayoutDispatch({
      type: LayoutContextActionTypes.SET_HOVER,
      hover: true
    });
  };
  const handleMouseLeave: React.MouseEventHandler = () => {
    debouncedLayoutDispatch.cancel?.();
    debouncedLayoutDispatch({
      type: LayoutContextActionTypes.SET_HOVER,
      hover: false
    });
  };

  return (
    <div
      tabIndex={-1}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default DBDiagram;

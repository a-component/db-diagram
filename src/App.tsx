import * as React from "react";
import { IDBDiagramProps } from "@interface";
import { ContextProvider } from "context/Context";
import { LayoutContextProvider } from "context/LayoutContext";
import DbDiagram from "components/DBDiagram";

const App: React.FC<IDBDiagramProps> = (props) => {
  return (
    <ContextProvider>
      <LayoutContextProvider>
        <DbDiagram {...props} />
      </LayoutContextProvider>
    </ContextProvider>
  );
};

export default App;

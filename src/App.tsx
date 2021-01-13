import React from "react";
import { NoteProvider } from "./modules/notes/noteProvider";
import NoteList from "./components/noteList";

const App: React.FunctionComponent = ({}) => {
  return (
    <NoteProvider>
      <NoteList />
    </NoteProvider>
  );
};

export default App;

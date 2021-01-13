import React, { memo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { NoteTile } from "../noteTile/index";
import { NoteForm } from "../noteForm/index";
import { Note } from "../../models/notes";

import "./styles.css";
import { useNotes, NoteContext } from "../../modules/notes/noteProvider";
import { RootState } from "../../store";
import { NoteState } from "../../store/notes/types";

let moment = require("moment");

const newNote: Note = {
  id: undefined,
  text: "This is a new note",
  dateCreated: moment(),
};

const NoteList: React.FunctionComponent = ({}) => {
  const { notes: noteList, noteFormOpen } = useSelector(
    (state: RootState): NoteState => state.notes
  );

  const notes = useNotes();

  const MemoisedNote = memo(
    NoteTile,
    (prev, next) => prev.note.text === next.note.text
  );

  return (
    <div className="container">
      <div className="tilePlus tile" key="note-new">
        <div className="tilePlusWrapper" onClick={() => notes.open(newNote)}>
          <span className="tilePlusContent">+</span>
        </div>
      </div>
      {noteList?.length > 0 &&
        noteList.map((note: Note) => <MemoisedNote note={note} />)}
      {noteFormOpen && <NoteForm />}
    </div>
  );
};

export default NoteList;

import React from "react";

import "./styles.css";
import { Note } from "../../models/notes";
import ReactMarkdown from "react-markdown";
import { useNotes } from "../../modules/notes/noteProvider";

type Props = {
  note: Note;
};

export const NoteTile: React.FunctionComponent<Props> = (props: Props) => {
  const { note } = props;
  const notes = useNotes();

  const onTileClick = () => {
    notes.open(note);
  };

  return (
    <div className="tile" onClick={onTileClick}>
      <div className="tileWrapper">
        <div className="tileContent">
          <ReactMarkdown children={note.text} />
        </div>
      </div>
    </div>
  );
};

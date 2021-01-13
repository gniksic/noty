import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import "./styles.css";
import { useNotes } from "../../modules/notes/noteProvider";
import { RootState } from "../../store";
import { NoteState } from "../../store/notes/types";

export const NoteForm: React.FunctionComponent<{}> = () => {
  const { selectedNote } = useSelector(
    (state: RootState): NoteState => state.notes
  );
  const notes = useNotes();

  const [isEdit, setIsEdit] = useState<boolean>(!selectedNote?.id);

  const [noteText, setNoteText] = useState<string>("This is a note");

  useEffect(() => {
    if (selectedNote) {
      setNoteText(selectedNote.text);
    }
  }, []);

  const onEdit = () => {
    setIsEdit(true);
  };

  const onDelete = () => {
    notes.remove(selectedNote.id);
    notes.close();
  };

  const onSave = () => {
    if (selectedNote?.id) {
      notes.save(selectedNote.id, noteText);
    } else {
      notes.add(noteText);
    }
    setIsEdit(false);
  };

  return (
    <div className="overlay" onClick={notes.close}>
      <div
        className="formBody"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
          e.stopPropagation();
        }}
      >
        <div className="formHeader">
          <div className="btn headerButton" onClick={notes.close}>
            <img src="/images/back.svg" width="20" height="20" />
          </div>
          <div className="btn">
            <span className="headerButton">
              {isEdit ? (
                <img
                  src="/images/save.svg"
                  width="20"
                  height="20"
                  onClick={onSave}
                />
              ) : (
                <img
                  src="/images/edit.svg"
                  width="20"
                  height="20"
                  onClick={onEdit}
                />
              )}
            </span>
            <span className="headerButton">
              <img
                src="/images/delete.svg"
                width="20"
                height="20"
                onClick={onDelete}
              />
            </span>
          </div>
        </div>
        <div className="formContent">
          {isEdit ? (
            <textarea
              className="noteTextArea"
              value={noteText}
              onChange={(e) => {
                setNoteText(e.target.value);
              }}
            />
          ) : (
            <ReactMarkdown children={noteText} />
          )}
        </div>
      </div>
    </div>
  );
};

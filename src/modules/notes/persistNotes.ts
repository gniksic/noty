import { Note } from "../../models/notes";

export const loadFromLocalStorage = (value: string): Array<Note> => {
  try {
    const serializedState = localStorage.getItem(value);
    if (serializedState === null) {
      return [];
    }
    const notes: Array<Note> = JSON.parse(serializedState);
    return notes;
  } catch (err) {
    return [];
  }
};

export const saveToLocalStorage = (value: string, state: Array<Note>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(value, serializedState);
  } catch {
    // handle write errors
  }
};

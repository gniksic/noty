import { Moment } from "moment";

export interface Note {
  id: string;
  text: string;
  dateCreated: Moment;
}

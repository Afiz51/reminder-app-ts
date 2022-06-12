import React from "react";
import Reminder from "../types/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminer: (id: number) => void;
}
const ReminderList = (props: ReminderListProps) => {
  return (
    <ul className="list-grop">
      {props.items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => props.onRemoveReminer(item.id)}
            className="btn btn-outline-danger mx-2 rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;

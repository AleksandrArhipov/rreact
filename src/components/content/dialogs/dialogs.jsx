import React from "react";
import s from "./dialogs.module.css";
import Item from "./item/item";
import Message from "./message/messages";

const Dialogs = props => {
  let newMessElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessElement.current.value;
    props.onMessageChange(text);
  };

  let dialogsElement = props.dialogs.map(dialog => (
    <Item name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messages.map(mess => (
    <Message value={mess.value} id={mess.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.items}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElement}
        <textarea
          ref={newMessElement}
          className={s.addmessage}
          value={props.newMessageText}
          onChange={onMessageChange}
        ></textarea>
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
};

export default Dialogs;

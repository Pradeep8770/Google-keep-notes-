import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

const CreateNote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const [showItem,setshowItem] = useState(false)

  const Showitem =()=>{
    setshowItem(true)
  }
  const HideItem = ()=>{
    setshowItem(false)
  }

  const userValue = (event) => {
    const { value, name } = event.target;
    setnote((preData)=>{
      return{
        ...preData,
         [name] : value}
    })

  };

  const addEvent =()=>{
    props.passEvent(note)
    setnote({
      title: "",
      content: "",
    })
  }



  return (
    <>
      <div className="main-note">
        <form className="form">
          {showItem? <input
            type={"text"}
            value={note.title}
            name="title"
            className="form-input"
            onChange={userValue}
            placeholder={"Title"}
          /> : null}
          <br />
          <textarea
            type={"text"}
            onChange={userValue}
            value={note.content}
            name= "content"
            className="form-textarea"
            cols=""
            rows=""
            placeholder="write a notes..."
            onClick={Showitem}
            onDoubleClick={HideItem}
          ></textarea>
          <Button className="btn" onClick={addEvent}>
            <AddIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;

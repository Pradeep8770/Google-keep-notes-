import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

const CreateNote = () => {
  return (
    <>
      <div className="main-note">
        <form className="form">
          <input type={"text"} className="form-input" placeholder={"Title"} />
          <br />
          <textarea
            type={"text"}
            className="form-textarea"
            cols=""
            rows=""
            placeholder="write a notes..."
          ></textarea>
          <Button className="btn">
            <AddIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;

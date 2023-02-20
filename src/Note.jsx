import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from "@material-ui/core";


const Note = (props)=>{
  const deletnote = ()=>{
    props.deleteItems(props.id)
  }
    return <>
          <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content} </p>
            <Button className="btn" onClick={deletnote}><DeleteOutlineIcon/></Button>
          </div>
    </>
}

export default Note;
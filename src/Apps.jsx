import React, { useState } from "react";
import Header from "./Header";
import Footers from "./Footer";
import CreateNote from "./CreateNotes.jsx";
import Note from "./Note";

const App = () => {
  const [additem, setitem] = useState([]);

  const addnote = (data) => {
    setitem((predata) => {
      return [...predata, data];
    });
  };

  const deletItem =(id)=>{
    console.log(id)
    setitem(additem.filter((value,index)=>{
      return index!==id
    }))

  }

  return (
    <>
      <Header />
      <CreateNote passEvent={addnote}/>
      {additem.map((value, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={value.title}
            content={value.content}
            deleteItems={deletItem}
          />
        );
      })}
      <Footers />
    </>
  );
};

export default App;

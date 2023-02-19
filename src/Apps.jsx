import React from "react";
import Header from "./Header";
import Footers from "./Footer";
import CreateNote from "./CreateNotes.jsx";
import Note from "./Note"; 

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      <Note/>
      <Footers />
    </>
  );
};

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(noteObject) {
    setNotes((prevNotes) => {
      return [...prevNotes, noteObject];
    });
    event.preventDefault();
  }

  return (
    <div>
      <Header onAdd={addNote}/>
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;

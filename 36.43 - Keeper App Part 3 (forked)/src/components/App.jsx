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

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((noteObject, index) => (
        <Note
          key={index}
          id={index}
          title={noteObject.title}
          content={noteObject.content}
          onPress={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

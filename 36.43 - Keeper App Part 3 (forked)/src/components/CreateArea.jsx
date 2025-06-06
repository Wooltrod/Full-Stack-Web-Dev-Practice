import React, {useState} from "react";

function CreateArea(props) {

  const [noteObject, setNoteObject] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setNoteObject((prevStateValue) => {
      if (inputName === "title") {
        return {
          title: inputValue,
          content: prevStateValue.content,
        };
      } else if (inputName === "content") {
        return {
          title: prevStateValue.title,
          content: inputValue,
        };
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={() => {
          props.onAdd(noteObject);
          setNoteObject({
            title: "",
            content: "",
          });
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteObject.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteObject.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

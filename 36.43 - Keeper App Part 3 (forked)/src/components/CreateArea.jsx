import React, {useState} from "react";

function CreateArea() {

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
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

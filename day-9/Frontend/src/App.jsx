import { useState } from "react";
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([
    {
      title: "text title 1",
      description: "text description",
    },
    {
      title: "text title 2",
      description: "text description",
    },
    {
      title: "text title 3",
      description: "text description",
    },
    {
      title: "text title 4",
      description: "text description",
    },
  ]);

  axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    setNotes(res.data.notes)
  })

  return (
    <>
      <div className="notes">
        {notes.map((note) => {
          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>;
        })}
      </div>
    </>
  );
}

export default App;

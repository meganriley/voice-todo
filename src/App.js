import './App.css';
import Todo from './components/Todo';
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from 'react';
import { app, database } from './firebase-config';
import { addDoc, collection } from '@firebase/firestore';
function App() {
  const databaseRef = collection(database, 'todo-list');
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    alanBtn({
      key: 'c984921562819e47ab2d393cbbd50b932e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        addDoc(databaseRef, { item: commandData.data })
          .then(() => {
            setUpdate(true);
          })
      }
    });
  }, []);
  return (
    <div>
      <Todo databaseRef={databaseRef} update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from "framer-motion"



function App() {

  const [names, updatename] = useState([])


  function addtolist() {
    const add = document.getElementById('inputsender').value
    if (add !== '') {
      updatename([...names, add])
      document.getElementById('inputsender').value = ''
    }
  }

  function handleRemoveItem(index) {
    setTimeout(() => {
      updatename(names => names.filter((img, i) => i !== index));
    }, 50)
  }

  function clear() {
    localStorage.clear();
    localStorage.setItem('list', JSON.stringify(names));
    updatename([])
  }

  function undo() {
    if (names == ![]) {
      updatename(JSON.parse(localStorage.getItem('list')))
    }
  }

  function checkenter(e) {
    if (e.key === 'Enter') {
      addtolist()
    }
  }

  function uploadfinal() {
    console.log(names)
  }




  useEffect(() => {
    undo()
  }, []);
  return (
    <div className="App">
      <div className='addingname'>
        <div id='input'>
          <input maxLength={20} onKeyDown={(e) => checkenter(e)} id='inputsender'></input>
          <button id='submit' onClick={() => addtolist()}>Enter</button>
          <button id='clear' onClick={() => clear()}>Clear</button>
          <motion.button whileTap={{ fontSize: '30px' }} id='clear' onClick={() => undo()}>Undo</motion.button >
          <button id='clear' onClick={() => undo()}>Final</button>
        </div>
        <motion.div layout='position' id='displayname'>
          {names.map((number, index) =>
            <motion.button layout className='names' animate={{ fontSize: '30px' }} onClick={() => handleRemoveItem(index)} key={index}>{index + 1}. {number}<motion.div layout layoutId="underline" /></motion.button>
          )}
        </motion.div>
      </div>
    </div >
  );
}

export default App;
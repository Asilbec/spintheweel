import './App.css';
import { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function App() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [timeBetween, newTimeBetween] = useState(0)
  const [timeBetweenH, newTimeBetweenH] = useState(0)
  const [timeBetweenM, newTimeBetweenM] = useState(0)
  const [timeBetweenS, newTimeBetweenS] = useState(0)



  const first = {
    hidden: { fontSize: 0 },
    visible: {
      fontSize: "15vh",
      transition: {
        duration: 0.4,
        delay: 0.2
      },
    }
  }
  const second = {
    hidden: { fontSize: 0 },
    visible: {
      fontSize: "8vh",
      transition: {
        duration: 0.4,
        delay: 0.4
      },
    }
  }
  const third = {

    hidden: { fontSize: 0 },
    visible: {
      fontSize: "5vh",
      transition: {
        duration: 0.4,
        delay: 0.6
      },
    }
  }

  const four = {
    hidden: { fontSize: 0 },
    visible: {
      fontSize: "3vh",
      transition: {
        duration: 0.4,
        delay: 0.8
      },
    }
  }
  const input = {
    hidden: {
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2
      },
    },

    visible: {
      scale: 0,
    }
  }
  function calcTimer() {


    console.log(document.getElementById('from').value)
    const from = document.getElementById('from').value
    const till = document.getElementById('till').value
    const diffInMs = new Date(till) - new Date(from)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    newTimeBetween(diffInDays)
    newTimeBetweenM(diffInMs / (1000 * 60))
    newTimeBetweenH(diffInMs / (1000 * 60 * 60))
    newTimeBetweenS(diffInMs / (1000))
  }


  useEffect(() => {
    document.getElementById('from').valueAsDate = new Date();
    document.getElementById('till').valueAsDate = new Date();
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <div className="App">
      <motion.a id='upbuttonSTyle' href='#idk'>
        <motion.button whileTap={{ scale: 3 }} id='upButton'>Up</motion.button>
      </motion.a>
      <div id='idk' className='addingname'>
        <motion.div animate={controls} ref={ref} initial="visible" variants={input} className='input'>
          <motion.div className='dateInput'>
            <motion.h1 className='fromStyle'>From :</motion.h1>
            <motion.input id='from' required className='dateinputStyle' type={'date'}></motion.input>
          </motion.div>
          <motion.div className='dateInput'>
            <motion.h1 className='fromStyle'>Till :</motion.h1>
            <motion.input id='till' required className='dateinputStyle' type={'date'} ></motion.input>
          </motion.div>
          <motion.a id='submitButton' href='#timeFun' ><motion.button style={{ border: 'none' }} id='submitButton' onClick={() => calcTimer()} >See</motion.button></motion.a>

        </motion.div>
      </div>
      <motion.div id='timeFun' className='displayTimer'>
        <motion.h2 animate={controls} ref={ref} initial="hidden" variants={first} className='timerstyle' id='timerD'> {timeBetween} Days</motion.h2>
        <motion.h2 animate={controls} ref={ref} initial="hidden" variants={second} className='timerstyle' id='timerM'> {timeBetweenH} Hours</motion.h2>
        <motion.h2 animate={controls} ref={ref} initial="hidden" variants={third} className='timerstyle' id='timerM'> {timeBetweenM} Minutes</motion.h2>
        <motion.h3 animate={controls} ref={ref} initial="hidden" variants={four} className='timerstyle' id='timerS'> {timeBetweenS} Seconds</motion.h3>
      </motion.div>

    </div >
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greeting/greetingSlice';
import Greeting from './components/Greeting';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);

  return (
    <Routes>
        <Route path="/" element={<Greeting />} />
    </Routes>
  )
};

export default App;

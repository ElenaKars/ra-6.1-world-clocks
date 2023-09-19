// App.tsx
import React from 'react';
import ClockList from './components/ClockList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ClockList />
    </div>
  );
};

export default App;

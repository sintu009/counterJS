import React, { useState } from 'react';
import './App.css';
import Stage from './Stage';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [stagesData, setStagesData] = useState([[], [], []]);
  const [currentStage, setCurrentStage] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    const newStagesData = [...stagesData];
    newStagesData[currentStage].push(inputValue);
    setStagesData(newStagesData);
    setInputValue('');
  };

  const handleDeleteClick = (index) => {
    const newStagesData = [...stagesData];
    newStagesData[currentStage].splice(index, 1);
    setStagesData(newStagesData);
  };

  const handlePreviousClick = () => {
    if (currentStage > 0) {
      setCurrentStage((prevStage) => prevStage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentStage < 2) {
      const newStagesData = [...stagesData];
      newStagesData[currentStage + 1] = [...stagesData[currentStage]];
      setStagesData(newStagesData);
      setCurrentStage((prevStage) => prevStage + 1);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <Stage
        title={`Stage ${currentStage + 1}`}
        items={stagesData[currentStage]}
        onAddClick={handleAddClick}
        onDeleteClick={handleDeleteClick}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
        isPreviousDisabled={currentStage === 0}
        isNextDisabled={currentStage === 2}
      />
    </div>
  );
}

export default App;

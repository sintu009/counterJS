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
      <div className="stage-container">
        <Stage
          title="Stage 1"
          items={stagesData[0]}
          onAddClick={handleAddClick}
          onNextClick={handleNextClick}
          isPreviousDisabled={currentStage === 0}
          isNextDisabled={currentStage === 2}
        />
        <Stage
          title="Stage 2"
          items={stagesData[1]}
          onNextClick={handleNextClick}
          onPreviousClick={handlePreviousClick}
          isPreviousDisabled={currentStage === 0}
          isNextDisabled={currentStage === 2}
        />
        <Stage
          title="Stage 3"
          items={stagesData[2]}
          onPreviousClick={handlePreviousClick}
          isPreviousDisabled={currentStage === 0}
          isNextDisabled={currentStage === 2}
        />
      </div>
    </div>
  );
}

export default App;

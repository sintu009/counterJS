import React from 'react';

const Stage = ({
    title,
    items,
    onAddClick,
    onNextClick,
    onPreviousClick,
    isPreviousDisabled,
    isNextDisabled,
}) => {
    return (
        <div className="stage">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="button-container">
                {onPreviousClick && (
                    <button onClick={onPreviousClick} disabled={isPreviousDisabled}>
                        Previous
                    </button>
                )}
                {onAddClick && (
                    <button onClick={onAddClick}>Add</button>
                )}
                {onNextClick && (
                    <button onClick={onNextClick} disabled={isNextDisabled}>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Stage;

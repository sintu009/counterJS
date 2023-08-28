import React from 'react';

const Stage = ({
    title,
    items,
    onAddClick,
    onDeleteClick,
    onPreviousClick,
    onNextClick,
    isPreviousDisabled,
    isNextDisabled,
}) => {
    return (
        <div className="stage">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onDeleteClick(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={onAddClick}>Add</button>
            <div className="button-container">
                <button onClick={onPreviousClick} disabled={isPreviousDisabled}>
                    Previous
                </button>
                <button onClick={onNextClick} disabled={isNextDisabled}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stage;

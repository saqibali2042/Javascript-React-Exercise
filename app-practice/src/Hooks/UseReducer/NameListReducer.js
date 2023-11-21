import React, { useReducer } from 'react';


const initialState = {
    names: ['John', 'Jane', 'Mike'],
    newName: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NEW_NAME':
            return { ...state, newName: action.payload };
        case 'ADD_NAME':
            if (state.newName.trim() !== '') {
                return {
                    ...state,
                    names: [...state.names, state.newName],
                    newName: ''
                };
            }
            return state;
        default:
            return state;
    }
};

const NameListReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (event) => {
        dispatch({ type: 'SET_NEW_NAME', payload: event.target.value });
    };

    const handleAddName = () => {
        dispatch({ type: 'ADD_NAME' });
    };

    return (
        <div>

            <h3>Use of useState</h3>
            <ul>
                {state.names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <input type="text" value={state.newName} onChange={handleInputChange} />
            <button onClick={handleAddName}>Add Name</button>
        </div>
    );
};

export default NameListReducer;


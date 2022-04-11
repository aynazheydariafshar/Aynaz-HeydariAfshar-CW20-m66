import React from 'react';
import WithCounter from './WithCounter';

const CountMouse = ({handlecount , count}) => {
    return <div>
        <h3>{count}</h3>
        <button onMouseOver={handlecount}>click</button>
    </div>;
}



export default WithCounter(CountMouse);
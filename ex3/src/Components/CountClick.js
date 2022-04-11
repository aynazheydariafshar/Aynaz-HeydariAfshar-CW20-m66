import React from 'react';
import WithCounter from './WithCounter';

const CountClick = ({handlecount , count}) => {
    return <div>
        <h3>{count}</h3>
        <button onClick={handlecount}>click</button>
    </div>;
}



export default WithCounter(CountClick);
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';
import styles from './Counter.css';

const Counter = props => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    
    return (
        <div>
            <div className="Counter">
                <button onClick={() => dispatch(increment())}>
                    +
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
           
        </div>
    );
}

export default Counter
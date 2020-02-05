import React, { Component } from 'react';
import classes from './Deathstacks.module.css';
import Board from './Board/Board';
import Tower from './Tower/Tower';

const LENGTH = 800;

class Deathstacks extends Component {
    
    

    render(){
        return (
            <div className={classes.Deathstacks}>
                <Board length={LENGTH}/>
                <Tower x={4} y={5} boardLength={LENGTH} stones={'r;r;b;r;b'}/>
            </div>
        )
    }
}
export default Deathstacks;
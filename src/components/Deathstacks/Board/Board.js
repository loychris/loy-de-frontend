import React, { Component } from 'react';
import Tile from './Tile/Tile';
import classes from './Board.module.css';

const LENGTH = 800;

class Board extends Component {



    render() {
        let tiles = [];
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                tiles.push(
                <Tile x={i} y={j} length={LENGTH} move={this.props.move} highlighted={this.props.highlighted} key={`${i}${j}`}/>
                );
            }
        }
        return(
            <div className={classes.Board}>
                {tiles}
            </div>
        )
    }
}

export default Board;
import React, { Component } from 'react';
import classes from './Board.module.css';

const LENGTH = 800;

class Board extends Component {

    calcPositionStyles = (x, y) => {
        return {
            left: `${LENGTH*0.1*x}px`,
            top: `${LENGTH*0.1*y}px`
        }
    }

    render() {
        let tiles = [];
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                if((i+j)%2 === 1) {
                    tiles.push(<div style={this.calcPositionStyles(i, j)} className={classes.DarkTile}></div>);
                } else {
                    tiles.push(<div style={this.calcPositionStyles(i, j)} className={classes.LightTile}></div>);
                }
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
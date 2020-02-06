import React, { Component } from 'react';
import classes from './Deathstacks.module.css';
import Board from './Board/Board';
import Tower from './Tower/Tower';

const LENGTH = 800;
const DIRECTIONS = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

class Deathstacks extends Component {
    
    state = {
        towers: [
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_', '_','bb'],
        ],
        clicked: null
    }


    select = (x, y) => {
        this.setState({clicked: [x,y]});
    }
    

    getPossibleMoves = () => {
        if(this.state.clicked === null) return null;
        const x = this.state.clicked[0];
        const y = this.state.clicked[1];
        const tower = this.state.towers[x][y].split('');
        if(tower[0] === '_') return null;
        const possibleTargets = [];
        const directions = this.getDirections(x,y);
        
        for(let dir=0;dir<directions.length;dir++){
                let currentPos = [x,y];
                let currentDir = [directions[dir][0],directions[dir][1]];
                let nextPos = [currentPos[0]+directions[dir][0],currentPos[1]+directions[dir][1]];
                let newDir = currentDir;
                for(let k=1;k<tower.length+1;k++){
                    nextPos = [currentPos[0]+currentDir[0],currentPos[1]+currentDir[1]];
                    if(nextPos[0]<0||nextPos[0]>9) {
                        newDir[0] = currentDir[0]*-1;
                    }
                    if(nextPos[1]<0||nextPos[1]>9) {
                        newDir[1] = currentDir[1]*-1;
                    }
                    nextPos = [currentPos[0]+newDir[0],currentPos[1]+newDir[1]];
                    currentDir = newDir;
                    currentPos = nextPos;
                    possibleTargets.push(`${currentPos[0]}${currentPos[1]}`);
                }
        }
        return [ ...new Set(possibleTargets.filter(m => {return m!==`${x}${y}`}))].sort().join(';');
    }

    getDirections = (x,y) => {
        let directions = DIRECTIONS;
        if(x===0) directions = directions.filter(dir => {return dir[0] !== -1});
        if(x===9) directions = directions.filter(dir => {return dir[0] !==  1});
        if(y===0) directions = directions.filter(dir => {return dir[1] !== -1});
        if(y===9) directions = directions.filter(dir => {return dir[1] !==  1});
        return directions;
    }

    render(){
        let towers = [];
        for(let row=0;row<10;row++){
            for(let col=0;col<10;col++){
                if(this.state.towers[col][row] !== '_'){
                    towers.push(<Tower 
                                    clicked={this.state.towers[col][row].clicked} 
                                    x={col} 
                                    y={row} 
                                    select={this.select}
                                    boardLength={LENGTH} 
                                    stones={this.state.towers[col][row]}
                                    key={[col, row]}/>);
                }
            }
        }
        return (
            <div className={classes.Deathstacks}>
                <Board highlighted={this.getPossibleMoves()} length={LENGTH}/>
                {towers}
            </div>
        )
    }
}
export default Deathstacks;
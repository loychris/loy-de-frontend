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
            ['rr', '_', '_', '_', '_', '_', '_', 'rrrrrrrrr', '_','bb'],
            ['rr', '_', '_', '_', '_', '_', '_', '_','_','bb'],
        ],
        clicked: null
    }

    calcHighlighted = (posX, posY) => {
        



        return [[1,2],[4,8],[7,4]]
    }
    

    getPossibleMoves = (x ,y) => {
        // x=
        const tower = this.state.towers[x][y].split('');
        const possibleTargets = [];
        const directions = this.getDirections(x,y);
        
        for(let dir=0;dir<directions.length;dir++){
                console.log('x,y: ',x, y);
                let currentPos = [x,y];
                let currentDir = [directions[dir][0],directions[dir][1]];
                let nextPos = [currentPos[0]+directions[dir][0],currentPos[1]+directions[dir][1]];
                let newDir = currentDir;
                console.log("nextPos: ", nextPos);
                for(let k=1;k<tower.length+1;k++){
                    nextPos = [currentPos[0]+directions[dir][0],currentPos[1]+directions[dir][1]];
                    console.log(
                        `  INFO
                            distance:   ${k}      
                            currentPos: ${currentPos}
                            currentDir: ${currentDir}
                            nextPos:    ${nextPos}
                        `)
                    if(nextPos[0]<0||nextPos[0]>9) {
                        newDir[0] = currentDir[0]*-1;
                        console.log(
                        `  X BOUNCE       
                            currentPos: ${currentPos}
                            newDir:     ${newDir}
                            nextPos:    ${nextPos}
                        `)
                    }
                    if(nextPos[1]<0||nextPos[1]>9) {
                        newDir[1] = currentDir[1]*-1;
                        console.log(
                        `  Y BOUNCE       
                            currentPos: ${currentPos}
                            newDir:     ${newDir}
                            nextPos:    ${nextPos}
                        `)
                    }
                    nextPos = [currentPos[0]+newDir[0],currentPos[1]+newDir[1]];
                    currentDir = newDir;
                    currentPos = nextPos;
                    if(currentPos[0] === 0 && currentPos[1] === 1) console.log('////////////////////////////////////////////////////////');
                    possibleTargets.push(`${currentPos[0]}${currentPos[1]}`);
                }
              


        }
        console.log("targets", possibleTargets.sort());
        return possibleTargets.join(';');
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
                                    boardLength={LENGTH} 
                                    stones={this.state.towers[col][row]}
                                    key={[col, row]}/>);
                }
            }
        }
        return (
            <div className={classes.Deathstacks}>
                <Board highlighted={this.getPossibleMoves(8,7)} length={LENGTH}/>
                {towers}
            </div>
        )
    }
}
export default Deathstacks;
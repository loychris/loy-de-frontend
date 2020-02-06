import React, { Component } from 'react';
import BlueStone from './BlueStone.svg';
import RedStone from './RedStone.svg';
import classes from './Tower.module.css';

class Tower extends Component {


    calcStonePosition = (x, y, height) => {
        return {
            left: `${this.props.boardLength/10*x+0.01*this.props.boardLength}px`,
            top: `${this.props.boardLength/10*y-11*height+0.02*this.props.boardLength}px`,
            width: `${this.props.boardLength/10*0.8}px`,
            filter: this.props.clicked ? 'drop-shadow(0px 0px 6px #ffffff)' : ''
        }
    } 




    render(){
        const stones = []
        const towerArr=  this.props.stones.split('')
        
        for(let i=0;i<towerArr.length;i++){
            if(towerArr[i] === 'r') {
                stones.push(<img style={this.calcStonePosition(this.props.x, this.props.y, i)} key={i} className={classes.Stone} src={RedStone} alt='red Stone'/>)
            } else {
                stones.push(<img style={this.calcStonePosition(this.props.x, this.props.y, i)} key={i} className={classes.Stone} src={BlueStone} alt='blue stone'/>)
            }
        }

        return(
            <div className={classes.tower}>
                {stones}
            </div>
        )
    }
}
export default Tower;
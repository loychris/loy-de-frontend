import React, { Component } from 'react';

import classes from './Tile.module.css';

class Tile extends Component {

    calcPositionStyles = (x, y) => {
        return {
            left: `${this.props.length*0.1*x}px`,
            top: `${this.props.length*0.1*y}px`
        }
    }


    render(){
        const x = this.props.x;
        const y = this.props.y;
        const highlighted = this.props.highlighted ? this.props.highlighted.split(';') : [];
        let cssClasses = [classes.Tile];
        if((x+y)%2 === 1){
            if(highlighted.includes(`${x}${y}`)){cssClasses.push(classes.SelectedDark)}
            else{cssClasses.push(classes.Dark)}
        }else{
            if(highlighted.includes(`${x}${y}`)){cssClasses.push(classes.SelectedLight)}
            else{cssClasses.push(classes.Light)}
        }

        return <div className={cssClasses.join(' ')} 
                    style={this.calcPositionStyles(x,y)}
                    onClick={() => {this.props.move(x,y)}}>
                        {x},{y}
                </div>
    }
}
export default Tile;
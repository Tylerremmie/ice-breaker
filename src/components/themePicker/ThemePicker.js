import React, { Component } from 'react';
import { random } from '../../functions/random';
import { UserArray } from './users';

import './ThemePicker.css';

export class ThemePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { spinning: false, winnerSelected: false, selectedUser: UserArray[random()], chosenRandom: random() };
    }

    setRandomImage = () => {
        const { chosenRandom } = this.state;

        let newRandomNumber = random();
        while (newRandomNumber === chosenRandom) {
            newRandomNumber = random();
        }
        console.log("Chosen index is: ", newRandomNumber);

        this.setState({ selectedUser: UserArray[newRandomNumber], chosenRandom: newRandomNumber });
    };

    startImageRandomizer = event => {
        let callCount = 0;
        const interval = setInterval((event) => {
            this.setRandomImage();
            this.setState({ spinning: true, winnerSelected: false });

            if (++callCount === 50) {
                clearInterval(interval);
                this.setState({ spinning: false, winnerSelected: true });
            }
        }, 100); // .1 seconds per interval, 50 times. (5 seconds).
    };

    render() {
        const { spinning, winnerSelected, selectedUser } = this.state;
        return (
            <div>
                <div className='title-container'><h1>THEME PICKER</h1></div>
                <div className='image-container'><img src={selectedUser.image} alt="" /></div>
                <div className={winnerSelected ? 'winner-container' : 'hidden'} ><h2>The winner is: <b>{selectedUser.name}</b></h2></div>
                <div className='button-container'><button className="spinButton" onClick={this.startImageRandomizer} disabled={spinning}>Select Winner</button></div>
            </div >
        )
    }
}
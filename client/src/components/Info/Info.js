import React, { Component } from 'react';
import './Info.scss';


export default class Info extends Component {
    render() {
        return (
            <div>
                <div className="Info" >

                    <div className="Title">
                        <h1>Front End </h1>
                    </div>

                    <div className="Content">
                        <p>
                            Using React.js and SASS
                    </p>
                    </div>
                </div>
                <div className="Info" >
                    <div className="Title">
                        <h1>Back End </h1>
                    </div>

                    <div className="Content">
                        <p>
                            Using Node.js, Express.js and Mongoose
                        </p>
                    </div>
                </div>
            </div>

        )

    }
}

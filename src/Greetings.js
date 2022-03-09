import React, {Component} from "react";

class Greetings extends Component {
    render() {
        const headline = 'Nasz komponent z ostatnich zajęć';
        return (
            <div>
                <h1>Hello world</h1>
                <h2>{headline}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci asperiores blanditiis corporis debitis doloremque ipsum soluta sunt vel?
                    A alias aspernatur dolores excepturi expedita hic libero, maxime modi nisi reiciendis.</p>
            </div>
        )
    }
}

export default Greetings;
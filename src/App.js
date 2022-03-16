import React, {Component} from "react";
import Greetings from './Greetings';
import Languages from "./Languages";
import Header from "./Header";
import SchoolSubject from "./SchoolSubject";
import ReadMoreBtn from "./ReadMoreBtn";
import MoreInfo from "./MoreInfo";
import ShowGames from "./ShowGames";
import Games from "./Games";

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <h1>React App</h1>
                <h2>Aplikacja działa</h2>
                <Greetings />
                <Languages />
                <SchoolSubject />
                <ReadMoreBtn />
                <MoreInfo></MoreInfo>
                <ShowGames></ShowGames>
                <Games></Games>
            </div>
        )
    }
}

export default App;
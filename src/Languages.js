import React, {Component} from "react";
import './languages.css';
import AcademyLanguages from "./AcademyLanguages";

class Languages extends Component {
    render() {
        const arrLanguages = ['HTML', 'JavaScript', 'CSS'];
        const languagesList = arrLanguages.map(lan => <li key={lan}>{lan}</li>);
    return (
            <div>
                <h3>Języki</h3>
                <ul>{languagesList}</ul>
                    <AcademyLanguages />
            </div>
        )
    }
}
export default Languages;

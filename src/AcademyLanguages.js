import React from "react";

function AcademyLanguages() {
    const Languages = ['HTML', 'CSS', 'JavaScript', 'Java', 'C++', 'React', 'Bootstrap'];
    const LanguagesList = Languages.map((el) => <li key={Math.random()}>{el}</li>);
    return (
        <div>
            <h2>Języki których uczyłem się podczas studiowania</h2>
        <ul>{LanguagesList}</ul>
        </div>
    )
}
export default AcademyLanguages;
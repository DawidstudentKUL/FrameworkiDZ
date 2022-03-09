import React from "react";

function SchoolSubject () {
    const schoolSubjects = ['Laboratorium programowania: frameworki aplikacji internetowych', 'Bazy danych II', 'Praktyka programowania' ,'Zarządzanie projektem informatycznym' ];
    const schoolSubjectsList = schoolSubjects.map(el => <p>{el}</p>);
    return <div>
        <h2>Lista przedmiotów na jakie uczęszczam</h2>
        <div>{schoolSubjectsList}</div>
    </div>
}
export default SchoolSubject;
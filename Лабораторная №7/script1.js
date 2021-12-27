"use strict"
function report() {
    let facultyName = document.forms[0].elements.Faculty.value; 
    console.log(facultyName);
    let studentName = document.forms[0].elements.Name.value;
    console.log(studentName);
    let studentSurname = document.forms[0].elements.Surname.value;
    let specialtyName = document.forms[0].elements.Specialty.value;
    console.log(specialtyName);
    let courseN = document.forms[0].elements.Course.value;
    console.log(courseN);
    let Disciplines = new Array;
    //Массив выбранных предметов:   
    for (let i = 0; i < document.forms[0].elements.Disciplines.length; i++){
        if (document.forms[0].elements.Disciplines[i].checked == true){
            Disciplines.push(document.forms[0].elements.Disciplines[i].value);
        }
    }
    for(let j = 0; j < Disciplines.length; j++){
        console.log(Disciplines[j]);
    }
    //Занесение полученных данных в область вывода:
    let ListOfDisciplines = "";
    for (let k = 0;k < Disciplines.length; k++){
        ListOfDisciplines += "<li>" + Disciplines[k] +"</li>";
    }
    document.getElementById("OutputWindow").innerHTML = "<h2>"+ facultyName +"</h2>\
    <p>Студент "+ studentSurname +" "+ studentName +" специальность "+specialtyName +" курс " + courseN + " должен сдавать\
    следующие предметы: </p> <ul>" + ListOfDisciplines + "</ul>";
    ListOfDisciplines = "";
    for(let i = 0; i < Disciplines.length; i++) {
        ListOfDisciplines += "<option>" + Disciplines[i] + "</option>";
    }
    document.getElementById("subjList").innerHTML = "<form><select>"+ ListOfDisciplines +"</select></form>";
}
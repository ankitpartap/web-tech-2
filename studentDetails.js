function getFormValues() {

    var table = document.getElementById("studentTable");
    var newRow = table.insertRow(-1);
    var rollNo = document.getElementById("roll-no").value;
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var fatherName = document.getElementById("father-name").value;
    var studentClass = document.getElementById("class").value;
    var subjects = document.getElementById("subjects").value;
    var cgpa = document.getElementById("cgpa").value;


    newRow.insertCell(0).innerHTML = rollNo;
    newRow.insertCell(1).innerHTML = firstName;
    newRow.insertCell(2).innerHTML = lastName;
    newRow.insertCell(3).innerHTML = fatherName;
    newRow.insertCell(4).innerHTML = studentClass;
    newRow.insertCell(5).innerHTML = subjects;
    newRow.insertCell(6).innerHTML = cgpa;
    newRow.insertCell(7).innerHTML = '<button onclick="editData(this)">Edit</button>' +
        '<button onclick="deleteData(this)">Delete</button>';

    clearFields()
}

function clearFields() {
    document.getElementById("roll-no").value = " ";
    document.getElementById("first-name").value = " ";
    document.getElementById("last-name").value = " ";
    document.getElementById("father-name").value = " ";
    document.getElementById("class").value = " ";
    document.getElementById("subjects").value = " ";
    document.getElementById("cgpa").value = " ";
}


function deleteData(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editData(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    document.getElementById("roll-no").value = cells[0].innerHTML;
    document.getElementById("first-name").value = cells[1].innerHTML;
    document.getElementById("last-name").value = cells[2].innerHTML;
    document.getElementById("father-name").value = cells[3].innerHTML;
    document.getElementById("class").value = cells[4].innerHTML;
    document.getElementById("subjects").value = cells[5].innerHTML;
    document.getElementById("cgpa").value = cells[6].innerHTML;

    row.parentNode.removeChild(row);
}



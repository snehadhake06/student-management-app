function updateCount() {
    document.getElementById("count").innerText =
        document.getElementById("studentList").children.length;
}

function addStudent() {

    let name = document.getElementById("studentName").value.trim();

    if (name !== "") {

        let li = document.createElement("li");

        li.innerHTML =
            name +
            ' <button onclick="deleteStudent(this)">Delete</button>';

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";

        updateCount();
    }
}

function deleteStudent(button) {

    button.parentElement.remove();

    updateCount();
}

function searchStudent() {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let students = document.getElementById("studentList").getElementsByTagName("li");

    for (let i = 0; i < students.length; i++) {

        let text = students[i].firstChild.textContent.toLowerCase();

        if (text.indexOf(input) > -1) {
            students[i].style.display = "";
        } else {
            students[i].style.display = "none";
        }
    }
}

updateCount();

function calculateResult() {

    let studentName =
        document.getElementById("studentName").value.trim();

    let rollNo =
        document.getElementById("rollNo").value.trim();

    if (studentName === "") {
        alert("Please enter student name.");
        return;
    }

    if (rollNo === "") {
        alert("Please enter roll number.");
        return;
    }

    let marks = [];

    for (let i = 1; i <= 5; i++) {

        let mark =
            document.getElementById("subject" + i).value;

        if (mark === "") {
            alert("Please enter marks for all 5 subjects.");
            return;
        }

        mark = Number(mark);

        if (mark < 0 || mark > 100) {
            alert("Marks must be between 0 and 100.");
            return;
        }

        marks.push(mark);
    }

    let total = marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    let percentage = (total / 500) * 100;

    let average = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else if (percentage >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    let passed = marks.every(
        mark => mark >= 40
    );

    let status = passed
        ? "PASS 🎉"
        : "FAIL 😔";

    document.getElementById("displayName").textContent =
        studentName;

    document.getElementById("displayRoll").textContent =
        "Roll No: " + rollNo;

    document.getElementById("total").textContent =
        total + " / 500";

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("average").textContent =
        average.toFixed(2);

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("status").textContent =
        status;

    let statusElement =
        document.getElementById("status");

    statusElement.classList.remove("pass", "fail");

    if (passed) {
        statusElement.classList.add("pass");
    } else {
        statusElement.classList.add("fail");
    }

    document.getElementById("result").style.display =
        "block";

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}

function resetCalculator() {

    document.getElementById("studentName").value = "";

    document.getElementById("rollNo").value = "";

    for (let i = 1; i <= 5; i++) {
        document.getElementById("subject" + i).value = "";
    }

    document.getElementById("result").style.display =
        "none";
}

document.addEventListener('DOMContentLoaded', function() {
    const gpaForm = document.getElementById('gpa-form');
    const calculateBtn = document.getElementById('calculate-btn');
    const gpaResultDiv = document.getElementById('gpa-result');
    const gpaValueDisplay = document.getElementById('gpa-value');
    const addCourseBtn = document.getElementById('add-course-btn');
    const newCoursesDiv = document.getElementById('new-courses');
    let courseCount = 3; // Start with 3 initial rows

    // Function to convert letter grade to GPA points
    function getGradePoints(grade) {
        switch (grade.toUpperCase()) {
            case 'A': return 4;
            case 'B': return 3;
            case 'C': return 2;
            case 'D': return 1;
            case 'F': return 0;
            default: return null; // Indicate invalid grade
        }
    }

    // Function to calculate GPA
    function calculateGPA() {
        const gradeInputs = document.querySelectorAll('#gpa-form select[name^="grade"]');
        let totalPoints = 0;
        let validCourseCount = 0;
        let allGradesEntered = true;

        gradeInputs.forEach(input => {
            const grade = input.value.trim();
            if (grade === "") {
                allGradesEntered = false;
            } else {
                const points = getGradePoints(grade);
                if (points !== null) {
                    totalPoints += points;
                    validCourseCount++;
                }
            }
        });

        if (!allGradesEntered && validCourseCount > 0) {
            gpaValueDisplay.textContent = "Please enter all grades.";
            return;
        } else if (!allGradesEntered && validCourseCount === 0) {
            gpaValueDisplay.textContent = "";
            return;
        }

        if (validCourseCount > 0) {
            const gpa = (totalPoints / validCourseCount).toFixed(2);
            gpaValueDisplay.textContent = gpa;
        } else {
            gpaValueDisplay.textContent = "No valid grades entered.";
        }
    }

    // Event listener for the Calculate GPA button
    calculateBtn.addEventListener('click', calculateGPA);

    // Event listener for the Add Another Course button
    addCourseBtn.addEventListener('click', function() {
        courseCount++;
        const newRow = document.createElement('div');
        newRow.classList.add('course-row');
        newRow.innerHTML = `
            <label for="course${courseCount}">Course ${courseCount}:</label>
            <input type="text" id="course${courseCount}" name="course${courseCount}" placeholder="Course Name">
            <select id="grade${courseCount}" name="grade${courseCount}">
                <option value="">-- Select Grade --</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
        `;
        newCoursesDiv.appendChild(newRow);
    });
});

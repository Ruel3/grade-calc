// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const coursesContainer = document.getElementById('courses-container');
    const addCourseBtn = document.getElementById('add-course');
    const calculateBtn = document.getElementById('calculate');
    const gpaResult = document.getElementById('gpa-result');
    
    // Initialize with 3 course rows
    for (let i = 0; i < 3; i++) {
        addCourseRow();
    }
    
    // Add event listener for "Add Another Course" button
    addCourseBtn.addEventListener('click', addCourseRow);
    
    // Add event listener for "Calculate GPA" button
    calculateBtn.addEventListener('click', calculateGPA);
    
    // Function to add a new course row
    function addCourseRow() {
        const row = document.createElement('div');
        row.className = 'course-row';
        
        // Create course name input
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'course-name';
        nameInput.placeholder = 'Course Name';
        nameInput.required = true;
        
        // Create grade select dropdown
        const gradeSelect = document.createElement('select');
        gradeSelect.className = 'course-grade';
        gradeSelect.required = true;
        
        // Add grade options
        const grades = ['A', 'B', 'C', 'D', 'F'];
        grades.forEach(grade => {
            const option = document.createElement('option');
            option.value = grade;
            option.textContent = grade;
            gradeSelect.appendChild(option);
        });
        
        // Add a default empty option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Grade';
        defaultOption.selected = true;
        defaultOption.disabled = true;
        gradeSelect.insertBefore(defaultOption, gradeSelect.firstChild);
        
        // Create delete button for the row
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            // Only remove if there's more than 1 row
            if (document.querySelectorAll('.course-row').length > 1) {
                row.remove();
            } else {
                alert('You need at least one course to calculate GPA.');
            }
        });
        
        // Append all elements to the row
        row.appendChild(nameInput);
        row.appendChild(gradeSelect);
        row.appendChild(deleteBtn);
        
        // Add row to container
        coursesContainer.appendChild(row);
    }
    
    // Function to calculate GPA
    function calculateGPA() {
        const courseRows = document.querySelectorAll('.course-row');
        let totalPoints = 0;
        let validEntries = 0;
        
        // Loop through each course row
        courseRows.forEach(row => {
            const gradeSelect = row.querySelector('.course-grade');
            const courseName = row.querySelector('.course-name');
            
            // Validate inputs
            if (!courseName.value.trim()) {
                alert('Please enter a course name for all courses.');
                return;
            }
            
            if (!gradeSelect.value) {
                alert('Please select a grade for all courses.');
                return;
            }
            
            // Convert grade to points
            const grade = gradeSelect.value;
            let points;
            
            switch(grade) {
                case 'A': points = 4; break;
                case 'B': points = 3; break;
                case 'C': points = 2; break;
                case 'D': points = 1; break;
                case 'F': points = 0; break;
                default: points = 0;
            }
            
            totalPoints += points;
            validEntries++;
        });
        
        // Calculate GPA if we have valid entries
        if (validEntries > 0) {
            const gpa = totalPoints / validEntries;
            gpaResult.textContent = gpa.toFixed(2);
        } else {
            gpaResult.textContent = '-';
            alert('No valid courses to calculate GPA.');
        }
    }
});

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    text-align: center;
}

.course-row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    align-items: center;
}

.course-row input, .course-row select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    flex: 1;
}

.course-name {
    flex: 2;
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #2980b9;
}

#result-container {
    margin-top: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 4px;
    text-align: center;
}

#gpa-result {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin-top: 10px;
}

@media (max-width: 600px) {
    .course-row {
        flex-direction: column;
    }
    
    .course-row input, .course-row select {
        width: 100%;
    }
}

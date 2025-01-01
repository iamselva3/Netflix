function saveFormData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    // let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    // localStorage.setItem('phone',phone);
    localStorage.setItem('password', password);
    
    // Key and value is stored in the form of string, Json.parse will
    // Change them into, object format
    let formData = JSON.parse(localStorage.getItem('formData') || '[]');
    
    // Add the new data to the array
    formData.push({ name,email,password });
    
    // Save updated data back to localStorage, convert back to string
    localStorage.setItem('formData', JSON.stringify(formData));
    }
    
    // Function to populate the table with data from localStorage
    function populateTable() {
        
    let savedData = JSON.parse(localStorage.getItem('formData') || '[]');
    
    let tableBody = document.querySelector('#dataTable tbody');
    
    // Clear the table before populating , this will prevent from duplications
    tableBody.innerHTML = '';
    
    // Append each row of data
    // data: Represents the current element (an object with properties like name and email).
    // index: Represents the index (position) of the current element in the array, starting from 0.
    savedData.forEach((data, index) => {
        let row = document.createElement('tr');
        row.innerHTML =` 
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.password}</td>
            <td>
                <button onclick="removeItem(${index})">Remove</button>
            </td>`;
        tableBody.appendChild(row);
    });
    }
    
    // Function to remove an item by index
    function removeItem(index) {
    // convert back to object
    
    let formData = JSON.parse(localStorage.getItem('formData') || '[]');
    
    // Remove one item at the specified index
    formData.splice(index, 1);
    
    // If there are no items left, removes formData
    if (formData.length == 0) {
        localStorage.removeItem('formData');
    } else {
        // Save updated data back to localStorage as string
        localStorage.setItem('formData', JSON.stringify(formData));
    }
    
    // Update the table
    populateTable();
    }
    
    // Function to remove all items
    // function removeAllItems() {
    // // Clear all localStorage data
    // localStorage.clear();
    
    // // Update the table
    // populateTable();
    // }
    
    // Attach event listeners
    // DOMContentLoaded Event:
    // This event is triggered when the HTML document has been completely loaded and parsed.
    // This ensures that the script runs only after the HTML structure 
    // (including the table and other elements) is ready.
    document.addEventListener('DOMContentLoaded', populateTable); // Populate table on page load
    document.getElementById('userform').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    saveFormData();
    populateTable(); // Update table with the new data
    alert('Form data saved and displayed!');
    });
    // document.getElementById('removeAll').addEventListener('click', () => {
    // if (confirm('Are you sure you want to remove all items?')) {
    //     removeAllItems();
    // }



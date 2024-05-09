let items = [];

function addItem() {
    const category = document.getElementById('category').value;
    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    items.push({
        category,
        item,
        price,
        quantity
    });

    renderBill();
}

function renderBill() {
    const billBody = document.getElementById('bill-body');
    billBody.innerHTML = '';

    let totalAmount = 0;

    items.forEach((item, index) => {
        const row = billBody.insertRow();
        row.insertCell(0).textContent = item.category;
        row.insertCell(1).textContent = item.item;
        row.insertCell(2).textContent = item.price.toFixed(2);
        row.insertCell(3).textContent = item.quantity;

        const actionCell = row.insertCell(4);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteItem(index);
        actionCell.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editItem(index);
        actionCell.appendChild(editButton);

        totalAmount += item.price * item.quantity;
    });

    document.getElementById('total-amount').textContent = '₹' + totalAmount.toFixed(2);
}

function deleteItem(index) {
    items.splice(index, 1);
    renderBill();
}

function editItem(index) {
    const newQuantity = parseInt(prompt('Enter new quantity:'));
    if (!isNaN(newQuantity) && newQuantity >= 0) {
        items[index].quantity = newQuantity;
        renderBill();
    } else {
        alert('Invalid quantity!');
    }
}


function sellItems() {
    // Implement sell functionality here
    alert('Items sold successfully!');
}


// Date and time js

// Get the current date and time
// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById('date-time');
    const date = now.toLocaleDateString('en-US');
    const time = now.toLocaleTimeString('en-US', { hour12: true });
    dateTimeElement.textContent = `${date} ${time}`;
}

// Function to display the date and time and set interval for continuous update
function displayDateTime() {
    updateDateTime(); // Initial display
    setInterval(updateDateTime, 1000); // Update every second
}

// Call the displayDateTime function when the page loads
window.onload = function() {
    displayDateTime();
};

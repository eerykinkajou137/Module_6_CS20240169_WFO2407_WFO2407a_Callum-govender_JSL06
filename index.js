// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuSection = document.getElementById("menu");
    
    // Loop through each category and its items in the menu object
    for (let category in menu) {
        // Create an element to represent the category
        const categoryHeading = document.createElement("h2");
        // Set the text content of the category element to the category name
        categoryHeading.textContent = category;

        // Append the category element to the menu container
        menuSection.appendChild(categoryHeading);

        // Create an element to represent a list of items
        const itemList = document.createElement("ul");

        // Loop through the items in the category and create list items
        menu[category].forEach(itemName => {
            // Create a list item element
            const itemElement = document.createElement("li");

            // Set the text content of the list item element to the item name
            itemElement.textContent = itemName;

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener("click", () => addToOrder(itemName));

            // Append the list item to the list of items
            itemList.appendChild(itemElement);
        });

        // Append the item list (ul) to the menu section after populating it
        menuSection.appendChild(itemList);
    }
}

function addToOrder(itemName) {
    // Get the order list and total elements from the HTML
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Create a new list item for the order
    const orderItem = document.createElement("li");
    orderItem.textContent = itemName;
    orderItemsList.appendChild(orderItem);

    // Update the total price (Assuming each item costs 50 units)
    let currentTotal = parseFloat(orderTotalElement.textContent) || 0;
    currentTotal += 50;
    orderTotalElement.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

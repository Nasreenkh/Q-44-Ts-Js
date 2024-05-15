// Function to create a sandwich summary
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana");
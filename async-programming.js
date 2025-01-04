// Promise Example
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Basic Promise Usage
console.log("Starting Promise demo...");
delay(2000)
    .then(() => console.log("Waited 2 seconds"))
    .catch(error => console.error("Error:", error));

// Async/Await Example
async function demonstrateAsync() {
    try {
        console.log("Starting async operation...");
        await delay(1500);
        console.log("First delay complete");
        await delay(1000);
        console.log("Second delay complete");
        return "All done!";
    } catch (error) {
        console.error("Error in async operation:", error);
    }
}

// Run the async demo
demonstrateAsync().then(result => console.log(result));

// Fetch API Example (simulated)
async function fetchUserData(userId) {
    try {
        // Simulate API call
        await delay(1000);
        return {
            id: userId,
            name: "John Doe",
            email: "john@example.com"
        };
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Use the simulated fetch
fetchUserData(1).then(user => console.log("User data:", user));

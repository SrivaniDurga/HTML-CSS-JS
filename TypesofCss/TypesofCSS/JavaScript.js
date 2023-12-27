function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
}
function displayRahul() {
    console.log("Rahul");
}
displayGreeting(displayRahul);

document.addEventListener('DOMContentLoaded', function() {
    const counter = document.querySelector("#counter-number");

    async function updateCounter() {
        try {
            let response = await fetch("https://3ge5x7nim42ir355oqdb35hrvu0axxvc.lambda-url.us-east-1.on.aws/");
            let data = await response.json();
            counter.innerHTML = `Number of Viewers: ${data}`;
        } catch (error) {
            console.error("Error updating counter:", error);
        }
    }

    updateCounter();
});

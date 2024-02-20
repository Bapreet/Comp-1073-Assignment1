const btnArrays = [
    ["The turkey", "Mom", "Dad", "The dog", "My teacher","The elephant", "The cat"],
    ["sat on", "ate", "danced with", "saw", "doesn't like"],
    ["a funny", "a scary", "a goofy", "a slimy", "a barking","a fat"],
    ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
    ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
];

const paraElements = [
    document.getElementById("para1"),
    document.getElementById("para2"),
    document.getElementById("para3"),
    document.getElementById("para4"),
    document.getElementById("para5")
];

// Array to keep track of current index for each button
let currentIndexes = [0, 0, 0, 0, 0];

// Function to change the word displayed for a specific button
function changeWord(btnNumber) {
    // Get the current index for the button
    let Index = currentIndexes[btnNumber - 1];

    // Get the word/phrase from the array based on the current index
    let word = btnArrays[btnNumber - 1][Index];

    // Update the text displayed beside the button
    paraElements[btnNumber - 1].innerText = word;

    // Increment the current index and handle cycling
    Index++;
    if (Index >= btnArrays[btnNumber - 1].length) {
        Index = 0; // Reset index to cycle through array
    }
    currentIndexes[btnNumber - 1] = Index;
}

// Function to view the completed story
function viewStory() {
    let story = "";
    for (let i = 0; i < paraElements.length; i++) {
        story += paraElements[i].innerText + " ";
    }
    document.getElementById("para-story").innerText = story.trim();
}

// Function to generate a random story
function generateRandomStory() {
    let randomStory="";
    for (let i = 0; i < paraElements.length; i++) {
        let randomIndex = Math.floor(Math.random() * btnArrays[i].length);
        randomStory += btnArrays[i][randomIndex] + " ";
    }
    document.getElementById("para-story").innerText = randomStory.trim();
}

// Function to reset the story
function resetStory() {
    for (let i = 0; i < paraElements.length; i++) {
        paraElements[i].innerText = "Your selection for " + (i + 1) + "st button will be displayed here.";
    }
    document.getElementById("para-story").innerText = "Your story will be displayed here after completion.";
}

// Add event listeners to buttons
document.getElementById("button1").addEventListener("click", function() {
    changeWord(1);
});
document.getElementById("button2").addEventListener("click", function() {
    changeWord(2);
});
document.getElementById("button3").addEventListener("click", function() {
    changeWord(3);
});
document.getElementById("button4").addEventListener("click", function() {
    changeWord(4);
});
document.getElementById("button5").addEventListener("click", function() {
    changeWord(5);
});

// Add event listener to "View Story" button
document.getElementById("viewStoryButton").addEventListener("click", function() {
    viewStory();
});
// Add event listener to "Generate Random Story" button
document.getElementById("generateRandomButton").addEventListener("click", function() {
    generateRandomStory();
});

// Add event listener to "Reset" button
document.getElementById("resetButton").addEventListener("click", function() {
    resetStory();
});
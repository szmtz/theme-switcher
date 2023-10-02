/*
mode will enable us to switch between the dark, light, and ninja modes that define the look of the UI.
color stores the background color for the selected mode.
image stores the path to the image that'll display for the selected mode.
label informs the user what mode they're currently using.

Assemble an if statement that checks if the mode variable is set to "dark". Leave its code block empty for now.
Add an else if statement that runs when mode is equal to "light".
Add an empty else statement that runs when mode isn't "light" or "dark".
When mode is "dark", color should update to "darkSlateBlue" in the code block.
Then update image to "/img/dark-icon.png".
Finally, update label to "Dark Mode".

When mode is "light", color should update to "ghostWhite".
Then update image to "/img/light-icon.png".
Finally, update label to "Light Mode".

In the else statement's code block, update color to "dimGray".
Then update image to "/img/ninja-icon.png".
Finally, update label to "Ninja Mode".

Print the label variable in the console, at the end of your code.

Change the value of the mode variable to "ninja" by either 
updating it before the conditional statement or 
replacing the value in the variable initialization.

*/


let mode = "ninja";  //dark, light, ninja 
let color = "ghostWhite"; // darkSlateBlue
let image = "/img/light-icon.png"; // /img/light-icon.png
let label = "Light Mode"; // Dark Mode

if (mode === "dark") {
   
} else if (mode === "light") {
   

} else {
    color = "dimGray"; 
    image = "/img/ninja-icon.png"; 
    label = "Ninja Mode"; 
}

console.log(label); 
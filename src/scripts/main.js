import { getJoke} from "./data/DataManager.js";
import { Joke } from "./feed/Joke.js";
/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display




const dadJoke = () => {
    const postElement = document.querySelector(".joke");
    getJoke().then(joke => {
        console.log("This is a DAD joke", joke)
        postElement.innerHTML = Joke(joke);
    });
}
document.querySelector(".joke-button")
.addEventListener("click", dadJoke);
/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/




// Are you defining the function here or invoking it?


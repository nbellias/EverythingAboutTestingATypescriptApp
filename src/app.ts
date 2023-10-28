import "reflect-metadata";
import Container from "typedi";
import { Joke } from "./dtos/Joke";
import { RandomJokeController } from "./controller/RandomJokeController";

const randomJokeController = Container.get(RandomJokeController);

async function printRandomJoke() {
    try {
        const joke:Joke = await randomJokeController.getRandomJoke();
        console.log(`Random Joke of type ${joke.type}:`);
        console.log(`Setup: ${joke.setup}`);
        console.log(`Punchline: ${joke.punchline}`);
    } catch (error) {
        console.error('An error occurred while fetching and printing the joke:', error);
    }
}

printRandomJoke();
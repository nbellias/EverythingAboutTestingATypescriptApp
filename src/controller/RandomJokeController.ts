import { Joke } from "../dtos/Joke";
import { RandomJokeService } from "../services/RandomJokeService";
import { Service } from "typedi";

@Service()
export class RandomJokeController {
  constructor(private jokeService: RandomJokeService) {}

  async getRandomJoke(): Promise<Joke> {
    try {
      const joke: Joke = await this.jokeService.getRandomJoke();
      return joke;
    } catch (error) {
      const errorJoke: Joke = {
        type: "error",
        setup: "An error occurred while fetching the joke",
        punchline: "",
        id: 0,
      };
      return errorJoke;
    }
  }
}

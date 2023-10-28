import { Joke } from "../dtos/Joke";
import { RandomJokeService } from "../services/RandomJokeService";
import { Service } from "typedi";

@Service()
export class RandomJokeController {
  constructor(private jokeService: RandomJokeService) {}

  async getRandomJoke(): Promise<any> {
    try {
      const joke:Joke = await this.jokeService.getRandomJoke();
      return joke;
    } catch (error) {
      return { error: 'An error occurred while fetching the joke' };
    }
  }
}

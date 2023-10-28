import { Service } from "typedi";
import { RandomJokes } from "../repositories/dals/RandomJokes";

@Service()
export class RandomJokeService {
  constructor(private jokeRepository: RandomJokes) {}

  async getRandomJoke() {
    try {
      return await this.jokeRepository.getRandomJoke();
    } catch (error) {
      throw error;
    }
  }
}

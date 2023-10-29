import { Service } from "typedi";
import { RandomJokes } from "../repositories/dals/RandomJokes";

@Service()
export class RandomJokeService {
  constructor(private jokeRepository: RandomJokes) {}

  async getRandomJoke() {
    return await this.jokeRepository.getRandomJoke();
  }
}

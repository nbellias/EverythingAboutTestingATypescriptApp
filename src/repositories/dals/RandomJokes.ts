import axios from "axios";
import { Service } from "typedi";

@Service()
export class RandomJokes {
  private baseUrl = "https://official-joke-api.appspot.com";

  // Function to fetch a random joke
  async getRandomJoke() {
    const response = await axios.get(`${this.baseUrl}/random_joke`);
    return response.data;
  }
}

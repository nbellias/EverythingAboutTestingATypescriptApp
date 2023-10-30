import axios from "axios";
import { RandomJokes } from "./RandomJokes";

jest.mock("axios");

describe("RandomJokes DAL Unit Tests", () => {
  let randomJokes: RandomJokes;

  beforeEach(() => {
    randomJokes = new RandomJokes();
  });

  it("should fetch a random joke", async () => {
    const mockedResponse = {
      data: {
        setup: "Why did the chicken cross the road?",
        punchline: "To get to the other side!",
      },
    };

    (axios.get as jest.Mock).mockResolvedValueOnce(mockedResponse);

    const joke = await randomJokes.getRandomJoke();

    expect(joke.setup).toBe("Why did the chicken cross the road?");
    expect(joke.punchline).toBe("To get to the other side!");
  });

  it("should handle network errors", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(randomJokes.getRandomJoke()).rejects.toThrow("Network error");
  });
});

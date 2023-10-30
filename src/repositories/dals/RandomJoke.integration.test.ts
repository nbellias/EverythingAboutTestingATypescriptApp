import { RandomJokes } from "./RandomJokes";

describe("RandomJokes DAL Integration Tests", () => {
  let randomJokes: RandomJokes;

  beforeEach(() => {
    randomJokes = new RandomJokes();
  });

  it("should fetch a random joke", async () => {
    const joke = await randomJokes.getRandomJoke();

    expect(joke).toBeDefined();
    expect(joke).not.toBeNull();
  });
});

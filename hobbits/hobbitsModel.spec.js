const Hobbits = require("./hobbitsModel");

const db = require("../data/dbConfig");

describe("hobbits model", () => {
  it("shoudl set testing enviroment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    it("should add hobbit to database", async () => {
      const records = await db("hobbits");
      expect(records).toHaveLength(0);

      await Hobbits.insert({ name: "sam" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });
  });
});

const supertest = require("supertest");

const server = require("./server");

describe("GET /", () => {
  it("should return 200 http status code", () => {
   return supertest(server)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
});

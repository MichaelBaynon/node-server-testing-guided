const request = require("supertest");

const server = require("./server");

describe("GET /", () => {
  it("should return 200 http status code", () => {
    return request(server)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
  test("should return JSON", async () => {
    const response = await request(server).get("/");

    expect(response.type).toMatch(/json/i);
  });

  test("should return JSON using .then()", () => {
   return request(server).get('/').then(response => {
       expect(response.type).toMatch(/json/i)
   })
  });

  it('should return {api: "up" }', async () => {
    const response = await request(server).get("/");

    expect(response.body).toEqual({ api: "up" });
  });

  
});

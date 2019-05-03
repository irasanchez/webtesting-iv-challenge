//QUESTIONS: Do I need a special route for my POST/DELETE and consolidate the it's into one describe for post and delete since they will share the same route?
// e.g. /api/data

const request = require("supertest");
const server = require("");

describe("server.js", () => {
  describe("index route", () => {
    // GET "/"
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the index route", async () => {
      const expectedBody = { api: "running" };

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedBody);
    });
  });
});

// POST
describe("server.js", () => {
  describe("post route", () => {
    it("should return a 'created' status code", async () => {
      const expectedStatusCode = 201;

      const response = await request(server).post("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the post route", async () => {
      const expectedJSONObject = { message: "post successful" };

      const response = await request(server).post("/");

      expect(response.body).toEqual(expectedJSONObject);
    });
  });
});

// DELETE

describe("server.js", () => {
  describe("delete route", () => {
    it("should return an 'OK' status code", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).delete("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the delete route", async () => {
      const expectedJSONObject = { message: "delete successful" };

      const response = await request(server).delete("/");

      expect(response.body).toEqual(expectedJSONObject);
    });
  });
});

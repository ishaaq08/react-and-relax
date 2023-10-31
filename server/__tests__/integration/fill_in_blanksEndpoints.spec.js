const request = require("supertest")
const api = require("../../../server/app")
const { resetTestDB } = require("./config")

describe("api server", () => {
	let api

	beforeEach(async () => {
		await resetTestDB()
	})

	beforeAll(() => {
		api = app.listen(4000, () => {
			console.log("Test server running on port 4000")
		})
	})

	afterAll((done) => {
		console.log("Gracefully closing server")
		api.close(done)
	})

	// As a user I can access the API
	test("responds to GET / with a 200 status code", (done) => {
		request(api).get("/").expect(200, done)
	})

	test("responds to GET / with a message and a description", async () => {
		const response = await request(api).get("/")

		expect(response.statusCode).toBe(200)
		expect(response.body.message).toBe("welcome")
		expect(response.body.description).toBe("GOAT API")
	})

	// As a user I can see all the goats
	test.skip("responds to GET /goats with a 200 status code", (done) => {
		request(api).get("/goats").expect(200, done)
	})

	test.skip("GET /goats display 3 elements in the web browser", async () => {
		const response = await request(api).get("/goats")
		expect(response.body.data.length).toBe(3)
	})

	// As as user I cannot post to /
	test.skip("responds to invalid method request with 405", (done) => {
		request(api).post("/").expect(405, done)
	})

	describe("GET /", () => {
		it("responds with a JSON message", async () => {
			const response = await request(app).get("/")
			expect(response.status).toBe(200)
			expect(response.body).toEqual({
				name: "React and relax API",
				description: "RAR to the world! and back",
			})
		})
	})
})

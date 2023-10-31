const FillInBlanks = require("../../../models/Fill_In_Blanks")
const { getAll, getAnswers } = require("../../../controllers/fill_In_Blanks")

// Mock the FillInBlanks model
jest.mock("../../../models/Fill_In_Blanks")
jest.mock("../../../database/connect")
// Mocking console.error
const errorMock = jest.spyOn(console, "error").mockImplementation(() => {})

afterEach(() => {
	errorMock.mockClear()
})

describe("getAll", () => {
	it("should successfully get all fill-in-blanks questions with answers", async () => {
		// Mock response data
		const mockFillInBlanksData = [
			{
				id: 1,
				question: "Question 1",
				answers: [{ answer: "Answer 1", is_correct: true }],
			},
			{
				id: 2,
				question: "Question 2",
				answers: [{ answer: "Answer 2", is_correct: true }],
			},
		]

		// Mock the FillInBlanks.getAll function
		FillInBlanks.getAll.mockResolvedValue(mockFillInBlanksData)

		// Mock request and response objects
		const req = {}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		}

		await getAll(req, res)

		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith(mockFillInBlanksData)
	})

	it("should handle errors when getting fill-in-blanks questions", async () => {
		// Mock the FillInBlanks.getAll function to simulate an error
		FillInBlanks.getAll.mockRejectedValue(new Error("Database error"))

		// Mock request and response objects
		const req = {}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		}

		await getAll(req, res)

		expect(res.status).toHaveBeenCalledWith(500)
		expect(res.json).toHaveBeenCalledWith({ error: "Database error" })
	})
})

describe("getAnswers", () => {
	it("should successfully get answers for fill-in-blanks questions", async () => {
		// Mock response data
		const mockAnswersData = [
			{ answer: "Answer 1", is_correct: true },
			{ answer: "Answer 2", is_correct: true },
		]

		// Mock the FillInBlanks.getAnswers function
		FillInBlanks.getAnswers.mockResolvedValue(mockAnswersData)

		// Mock request and response objects
		const req = {}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		}

		await getAnswers(req, res)

		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith(mockAnswersData)
	})

	it("should handle errors when getting answers for fill-in-blanks questions", async () => {
		// Mock the FillInBlanks.getAnswers function to simulate an error
		FillInBlanks.getAnswers.mockRejectedValue(new Error("Database error"))

		// Mock request and response objects
		const req = {}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		}

		await getAnswers(req, res)

		expect(res.status).toHaveBeenCalledWith(500)
		expect(res.json).toHaveBeenCalledWith({ error: "Database error" })
	})
})

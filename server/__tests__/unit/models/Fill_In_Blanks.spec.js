const Fill_In_Blanks = require("../../../models/Fill_In_Blanks")
const db = require("../../../database/connect")

beforeEach(() => {
	jest.clearAllMocks()
})

afterAll(() => {
	jest.resetAllMocks()
})

describe("Fill_In_Blanks", () => {
	describe("getAll", () => {
		it("should fetch and return all fill-in-blanks questions with answers", async () => {
			jest.spyOn(db, "query").mockResolvedValue({
				rows: [
					{ id: 1, question: "Question 1" },
					{ id: 2, question: "Question 2" },
				],
			})

			const result = await Fill_In_Blanks.getAll()
			expect(result[0] instanceof Fill_In_Blanks).toBeTruthy() // Check if the result is an instance of Fill_In_Blanks class
			expect(result[0].id).toBe(1)
			expect(result[0].question).toBe("Question 1")
			expect(result[0].answers).toEqual([]) // and so on for other attributes
		})

		it("should handle database errors", async () => {
			jest.spyOn(db, "query").mockRejectedValue(new Error("Database error"))

			const result = await Fill_In_Blanks.getAll()

			expect(result).toEqual([])
			expect(console.error).toHaveBeenCalledWith("Database error")
		})
	})

	describe("getAnswers", () => {
		it("should fetch and set answers for the fill-in-blanks question", async () => {
			db.query.mockResolvedValue({
				rows: [
					{ question_id: 1, answer: "Answer 1", is_correct: true },
					{ question_id: 1, answer: "Answer 2", is_correct: false },
				],
			})

			const instance = new Fill_In_Blanks({ id: 1, question: "Question 1" })
			await instance.getAnswers()

			expect(instance.answers).toEqual([
				{ question_id: 1, answer: "Answer 1", is_correct: true },
				{ question_id: 1, answer: "Answer 2", is_correct: false },
			])
		})

		it("should handle database errors", async () => {
			db.query.mockRejectedValue(new Error("Database error"))

			const instance = new Fill_In_Blanks({ id: 1, question: "Question 1" })
			await instance.getAnswers()

			expect(instance.answers).toEqual([])
			expect(console.error).toHaveBeenCalledWith("Database error")
		})
	})
})

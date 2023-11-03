import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"

import EditModal from "."

const editSubmit = vi.fn()
describe("EditModal", () => {
	beforeEach(() => {
		render(
			<EditModal
				closeEditModal={closeEditModal}
				setEmail={setEmail}
				setPassword={setPassword}
				setConfirmPassword={setConfirmPassword}
				setCheckboxState={setCheckboxState}
				checkboxState={checkboxState}
				email={email}
				password={password}
				confirmPassword={confirmPassword}
				editSubmit={editSubmit}
			/>
		)
	})

	afterEach(() => {
		cleanup()
	})

	it("displays the button with the correct text content", () => {
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
		expect(button.textContent).toBe("Edit Profile")
	})
})

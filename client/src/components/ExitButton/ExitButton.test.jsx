import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import { useData } from "../../contexts"
import { useNavigate } from "react-router-dom"
// screen is like virtual document so you can get something from the DOM i.e. button via classname
// Render allows you to render component on the sceen

// Code that allows us to test document specific behaviour i.e. presence within the document (is the component on the page or not)
// matchers allow us to test presence within the document
import * as matchers from "@testing-library/jest-dom/matchers"
expect.extend(matchers)

import Exitbutton from "."
import { m } from "framer-motion"

describe("Exitbutton", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Exitbutton />
			</BrowserRouter>
		)
	})

	afterEach(() => {
		cleanup()
	})

	it("displays the button with the correct text content", () => {
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
		expect(button.textContent).toBe("Exit Game")
	})
})

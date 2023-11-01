import React from "react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
// screen is like virtual document so you can get something from the DOM i.e. button via classnames
// Render allows you to render component on the screen

// Code that allows us to test document specific behaviour i.e. presence within the document (is the component on the page or not)
// matchers allow us to test presence within the document
import * as matchers from "@testing-library/jest-dom/matchers"
expect.extend(matchers)

import Login from "."
import { DataProvider } from "../../contexts"

describe("login", () => {
	beforeEach(() => {
		render(
			<DataProvider>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</DataProvider>
		)
	})

	afterEach(() => {
		cleanup()
	})

	it("displays a heading 2 with the correct text content", () => {
		const h2 = screen.getByRole("heading")
		expect(h2).toBeInTheDocument()
		expect(h2.textContent).toBe("Sign in to your account")
	})
	it("displays a label with the correct text content", () => {
		const label = screen.getByText("Username")
		expect(label).toBeInTheDocument()
		expect(label.textContent).toBe("Username")
	})
	it("displays a label with the correct text content", () => {
		const label = screen.getByText("Password")
		expect(label).toBeInTheDocument()
		expect(label.textContent).toBe("Password")
	})
	it("displays a button with the correct text content", () => {
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
		expect(button.textContent).toBe("Sign in")
	})
	it("displays a link with the correct text content", () => {
		const link = screen.getByText("Start a 14 day free trial")
		expect(link).toBeInTheDocument()
	})
	it("displays a p tag with the correct text content", () => {
		const p = screen.getByText("Not a member?")
		expect(p).toBeInTheDocument()
	})
})

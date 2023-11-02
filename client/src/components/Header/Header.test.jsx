import React from "react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import { useData } from "../../contexts"
// screen is like virtual document so you can get something from the DOM i.e. button via classname
// Render allows you to render component on the sceen

// Code that allows us to test document specific behaviour i.e. presence within the document (is the component on the page or not)
// matchers allow us to test presence within the document
import * as matchers from "@testing-library/jest-dom/matchers"
expect.extend(matchers)

import Header from "."
vi.mock("../../contexts", () => ({ useData: vi.fn() }))
describe("Header", () => {
	beforeEach(() => {
		useData.mockReturnValue({
			username: "",
			email: "",
		})
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)
	})

	afterEach(() => {
		cleanup()
		vi.clearAllMocks()
	})

	it("Displays the navigation with the correct number of link", () => {
		const nav = screen.getByRole("navigation")
		expect(nav).toBeInTheDocument()
		expect(nav.children.length).toBe(2)
	})

	it("Displays the correct h1 text content", () => {
		const h1 = screen.getByRole("heading")
		expect(h1).toBeInTheDocument()
		expect(h1.textContent).toBe("React + Relax")
	})

	it("renders the main navigation when the hamburger icon is clicked", async () => {
		const hamburger = screen.getByRole("nav-toggle")
		expect(hamburger).toBeInTheDocument()

		await userEvent.click(hamburger)
		const mainNav = screen.getByRole("main-nav")
		expect(mainNav).toBeInTheDocument()
		expect(mainNav.children.length).toBe(1)

		const navContainer = screen.getByRole("nav-container")
		expect(navContainer).toBeInTheDocument()
		expect(navContainer.children.length).toBe(2)
	})

	it("renders the home link and directs us to the home page", async () => {
		const hamburger = screen.getByRole("nav-toggle")
		await userEvent.click(hamburger)

		const homeLink = screen.getByRole("link", { name: "Home" })
		expect(homeLink).toBeInTheDocument()

		await userEvent.click(homeLink)
		expect(window.location.href).toEqual("http://localhost:3000/")
	})

	it("renders the games link and directs us to the games page", async () => {
		const hamburger = screen.getByRole("nav-toggle")
		await userEvent.click(hamburger)

		const gamesLink = screen.getByRole("link", { name: "Games" })
		expect(gamesLink).toBeInTheDocument()

		await userEvent.click(gamesLink)
		expect(window.location.href).toEqual("http://localhost:3000/games")
	})

	it("renders the Login link and directs us to the Login page", async () => {
		const hamburger = screen.getByRole("nav-toggle")
		await userEvent.click(hamburger)

		const loginLink = screen.getByRole("link", { name: "Login" })
		expect(loginLink).toBeInTheDocument()

		await userEvent.click(loginLink)
		expect(window.location.href).toEqual("http://localhost:3000/login")
	})

	it("renders the Signup link and directs us to the Signup page", async () => {
		const hamburger = screen.getByRole("nav-toggle")
		await userEvent.click(hamburger)

		const signupLink = screen.getByRole("link", { name: "Signup" })
		expect(signupLink).toBeInTheDocument()

		await userEvent.click(signupLink)
		expect(window.location.href).toEqual("http://localhost:3000/signup")
	})

	it("renders the Logout link and directs us to the Logout page", async () => {
		useData.mockReturnValue({
			username: "sdsds",
			email: "",
		})
		const hamburger = screen.getByRole("nav-toggle")
		await userEvent.click(hamburger)

		const logoutLink = screen.getByRole("link", { name: "Logout" })
		expect(logoutLink).toBeInTheDocument()
	})

  it("renders the Profile link and directs us to the Profile page", async () => {
    useData.mockReturnValue({
      username: "sdsds",
      email: "",
    })
    const hamburger = screen.getByRole("nav-toggle")
    await userEvent.click(hamburger)

    const profileLink = screen.getByRole("link", { name: "Profile" })
    expect(profileLink).toBeInTheDocument()
  })
  
})

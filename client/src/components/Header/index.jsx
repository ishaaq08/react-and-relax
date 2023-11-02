import { AnimatePresence, motion } from "framer-motion"
import { NavLink, Outlet, Link } from "react-router-dom"
import { Hamburger, Logo } from "../../assets/Icons"
import { useState } from "react"
import { useData } from "../../contexts"

const index = () => {
	const [open, setOpen] = useState(false)
	const { username } = useData()
	const toggleMenu = () => {
		setOpen(!open)
	}

	const menuVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			opacity: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	}

	const containerVariants = {
		initial: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
	}

	const navVariants = {
		initial: {
			y: "30vh",
			transition: {
				duration: 0.5,
				ease: [0.37, 0, 0.63, 1],
			},
		},
		open: {
			y: 0,
			transition: {
				ease: [0, 0.55, 0.45, 1],
				duration: 0.7,
			},
		},
	}

	return (
		<>
			<header className="absolute z-20  text-white p-12 w-screen">
				<nav className="flex items-center justify-between flex-row">
					<div
						role="nav-toggle"
						onClick={toggleMenu}
						className="cursor-pointer"
					>
						<Hamburger />
					</div>
					<div className="text-lg flex w-1/5 justify-around">
						<h1>React + Relax</h1>
						<Logo />
					</div>
				</nav>
				<AnimatePresence>
					{open && (
						<motion.div
							role="main-nav"
							variants={menuVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="fixed z-20 left-0 top-0 h-screen w-full bg-[#F2F4FD] origin-top text-black p-10"
						>
							<div className="flex h-full flex-col" role="nav-container">
								<div className="flex justify-between">
									<h2 className="text-lg text-black">React + Relax</h2>
									<p
										className="cursor-pointer text-md text-black"
										onClick={toggleMenu}
									>
										Close
									</p>
								</div>

								<motion.div
									variants={containerVariants}
									initial="initial"
									animate="open"
									exit="initial"
									className="flex flex-col h-full justify-center font-roboto items-center gap-4 bg-[#F2F4FD] text-5xl uppercase text-black"
								>
									<div className="overflow-hidden">
										<motion.div variants={navVariants}>
											{/* added a conditional to change the nav if username isnt empty if username not empty dashboard */}
											<Link
												onClick={toggleMenu}
												className=" cursor-pointer"
												to={username ? "/dashboard" : "/"}
											>
												Home
											</Link>
										</motion.div>
									</div>
									<div className="overflow-hidden">
										<motion.div variants={navVariants}>
											<Link
												onClick={toggleMenu}
												className=" cursor-pointer"
												to="/games"
											>
												Games
											</Link>
										</motion.div>
									</div>
									<div className="overflow-hidden">
										<motion.div variants={navVariants}>
											{/* added a conditional to change the nav if username isnt empty */}
											{username ? (
												<Link
													onClick={toggleMenu}
													className=" cursor-pointer"
													to="/profile"
												>
													Profile
												</Link>
											) : (
												<Link
													onClick={toggleMenu}
													className=" cursor-pointer"
													to="/login"
												>
													Login
												</Link>
											)}
										</motion.div>
									</div>
									<div className="overflow-hidden">
										<motion.div variants={navVariants}>
											{/* added a conditional to change the nav if username isnt empty */}
											{username ? (
												<Link
													onClick={toggleMenu}
													className=" cursor-pointer"
													to="/logout"
												>
													Logout
												</Link>
											) : (
												<Link
													onClick={toggleMenu}
													className=" cursor-pointer"
													to="/signup"
												>
													Sign-up
												</Link>
											)}
										</motion.div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
			<Outlet />
		</>
	)
}
export default index

import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Hamburger, Logo } from '../../assets/Icons';
import { useState } from 'react';

const index = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

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
  };

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
  };

  const navVariants = {
    initial: {
      y: '30vh',
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
  };

  return (
    <>
      <header className="bg-black text-white p-8">
        <nav className="flex items-center justify-between flex-row">
          <div onClick={toggleMenu} className="cursor-pointer">
            <Hamburger />
          </div>
          <div className="flex w-1/5 justify-around">
            <h1>React + Relax</h1>
            <Logo />
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-20 left-0 top-0 h-screen w-full bg-slate-500 origin-top text-black p-10"
            >
              <div className="flex h-full flex-col">
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
                  className="flex flex-col h-full justify-center font-serif items-center gap-4 bg-slate-500 text-5xl uppercase text-black"
                >
                  <div className="overflow-hidden">
                    <motion.div variants={navVariants}>
                      <Link
                        onClick={toggleMenu}
                        className=" cursor-pointer"
                        to="/"
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
                      <Link
                        onClick={toggleMenu}
                        className=" cursor-pointer"
                        to="/login"
                      >
                        Login
                      </Link>
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div variants={navVariants}>
                      <Link
                        onClick={toggleMenu}
                        className=" cursor-pointer"
                        to="/signup"
                      >
                        Signup
                      </Link>
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
  );
};
export default index;

import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';
import { Hamburger, Logo } from '../Icons';
import { useState } from 'react';

const index = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
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

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: '0.9s',
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: '0.3s',
        staggerChildren: '0.09s',
        staggerDirection: 1,
      },
    },
  };

  return (
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
            className="fixed left-0 top-0 h-screen w-full bg-slate-500 origin-top text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h2 className="text-lg text-black">React + Relax</h2>
                <p
                  className="
            cursor-pointer text-md text-black"
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
                  <motion.div
                    variants={navVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                  >
                    <NavLink to="/">Home</NavLink>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={navVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                  >
                    <NavLink to="/games">Games</NavLink>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={navVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                  >
                    <NavLink to="/login">Login</NavLink>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={navVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                  >
                    <NavLink to="/signup">Signup</NavLink>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default index;

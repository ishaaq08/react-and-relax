import { Link } from 'react-router-dom';
import {
  Facebook,
  Hamburger,
  TikTok,
  Twitter,
  Youtube,
} from '../../assets/Icons';
import { Reveal } from '../Reveal';
import { motion } from 'framer-motion';

const index = () => {
  return (
    <footer role="footer" className="bg-[#00B4D8] p-5 w-full h-full text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-white font-semibold text-5xl tracking-widest">
          <Reveal>
            <h2>React + Relax</h2>
          </Reveal>
        </div>
        <div className="flex gap-7">
          {/* First Row */}
          <div>
            <Reveal>
              <h4 className="font-semibold text-lg tracking-widest">Help</h4>
            </Reveal>
            <div className="flex flex-col gap-1">
              <Reveal>
                <Link to="/">Help & FAQ</Link>
              </Reveal>
            </div>
          </div>
          {/* Second Row */}
          <div>
            <Reveal>
              <h4 className="font-semibold text-lg tracking-widest">
                Legal Info
              </h4>
            </Reveal>
            <div className="flex flex-col gap-1">
              <Reveal>
                <Link to="/">Privacy Policy</Link>
              </Reveal>
              <Reveal>
                <Link to="/">Terms & Conditions</Link>
                <Reveal></Reveal>

                <Link to="/">Cookie Policy</Link>
              </Reveal>
            </div>
          </div>
          {/* Third Row */}
          <div>
            <Reveal>
              <h4 className="font-semibold text-lg tracking-widest">
                Follow Us
              </h4>
            </Reveal>
            <div className="flex flex-col gap-1">
              <Reveal>
                <Link to="/">Facebook</Link>
              </Reveal>
              <Reveal>
                <Link to="/">Twitter</Link>
              </Reveal>
              <Reveal>
                <Link to="/">Instagram</Link>
              </Reveal>

              <Reveal>
                <Link to="/">Tiktok</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-5 ">
        <div className="flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: '20vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex  bg-white w-4/12"
          >
            <hr />
          </motion.span>

          <div className="flex px-10 justify-around flex-1">
            <Reveal>
              <Facebook />
            </Reveal>
            <Reveal>
              <Twitter />
            </Reveal>
            <Reveal>
              <Youtube />
            </Reveal>
            <Reveal>
              <TikTok />
            </Reveal>
          </div>

          <motion.span
            initial={{ opacity: 0, y: '20vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex bg-white w-4/12"
          >
            <hr />
          </motion.span>
        </div>
      </div>
    </footer>
  );
};
export default index;

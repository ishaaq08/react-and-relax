import { Link } from 'react-router-dom';
import {
  Facebook,
  Hamburger,
  TikTok,
  Twitter,
  Youtube,
} from '../../assets/Icons';

const index = () => {
  return (
    <div className="bg-[#00B4D8] p-5 w-full text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-white font-semibold text-5xl tracking-widest">
          <h2>React + Relax</h2>
        </div>
        <div className="flex gap-7">
          {/* First Row */}
          <div>
            <h4 className="font-semibold text-lg tracking-widest">Help</h4>
            <div className="flex flex-col gap-1">
              <Link to="/">Help & FAQ</Link>
            </div>
          </div>
          {/* Second Row */}
          <div>
            <h4 className="font-semibold text-lg tracking-widest">
              Legal Info
            </h4>
            <div className="flex flex-col gap-1">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">Cookie Polciy</Link>
            </div>
          </div>
          {/* Third Row */}
          <div>
            <h4 className="font-semibold text-lg tracking-widest">Follow Us</h4>
            <div className="flex flex-col gap-1">
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">Tiktok</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-5 ">
        <div className="flex items-center justify-center">
          <span className="flex  bg-white w-4/12">
            <hr />
          </span>
          <div className="flex px-10 justify-around flex-1">
            <Facebook />
            <Twitter />
            <Youtube />
            <TikTok />
          </div>
          <span className="flex  bg-white w-4/12">
            <hr />
          </span>
        </div>
      </div>
    </div>
  );
};
export default index;

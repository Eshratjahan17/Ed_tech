import React from 'react';
import facebook from '../assests/Images/icons/facebook.png';
import instagram from '../assests/Images/icons/instagram.png';
import youtube from '../assests/Images/icons/youtube.png';

const Footer = () => {
  return (
    <div>
      <footer class="footer items-center p-4 bg-neutral text-neutral-content ">
        <div class="items-center grid-flow-row">
          <a href="/" class=" normal-case text-2xl text-white">
            Ed Tech
          </a>

          <p className="text-white">Copyright © 2022 - All right reserved</p>
        </div>
        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.instagram.com/programminghero/">
            <img width="24" height="24" src={instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/c/ProgrammingHero">
            <img src={youtube} alt="" />
          </a>
          <a href="https://www.facebook.com/programmingHero">
            <img src={facebook} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
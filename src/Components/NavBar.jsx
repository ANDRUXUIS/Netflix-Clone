import React, { useEffect, useState } from "react";

function NavBar(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setShow(true) : setShow(false);

      return () => window.removeEventListener("scroll");
    });
  });

  return (
    <div id="NB">
      <nav
        className={`navbar navbar-dark ${
          show ? "nav__black" : "nav__transparent"
        }`}
      >
        {/* eslint-disable-next-line */}
        <a className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="Netflix__Logo"
            loading="lazy"
            width="120"
            height="50"
          />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;

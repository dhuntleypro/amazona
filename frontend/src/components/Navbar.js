import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>

        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sing in</a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

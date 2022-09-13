import React from "react";

const Navbar = ({ setData, Items }) => {
  const filterAllData = (value) => {
    if (value == "All") {
      setData(Items);
    } else {
      const res = Items.filter((e) => e.folder == value);
      setData(res);
    }
  };

  return (
    <>
      <nav className="side-navbar side-navbar-expand-sm  w-0 navbar-dark bg-dark p-3">
        <a className="navbar-brand" href="#">
          <h1>Folders</h1>
        </a>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => filterAllData("All")}>
              <a className="nav-link">
                All
                <span className="badge badge-pill badge-secondary"></span>
              </a>
            </li>
            <li className="nav-item" onClick={() => filterAllData("Inbox")}>
              <a className="nav-link" href="#">
                inbox
                <span className="badge badge-pill badge-secondary"></span>
              </a>
            </li>
            <li className="nav-item" onClick={() => filterAllData("Social")}>
              <a className="nav-link" href="#">
                social
                <span className="badge badge-pill badge-secondary"></span>
              </a>
            </li>
            <li className="nav-item" onClick={() => filterAllData("Sent")}>
              <a className="nav-link" href="#">
                sent
                <span className="badge badge-pill badge-secondary"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

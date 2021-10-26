import "./topfold.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Topfold = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="topfold-container">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar flex-center">
            <i class="fi fi-rr-search"></i>
            <input
              type="text"
              placeholder="search for expenses"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <Link to="/add-expense">
            <div className="btn-add">
              <button className="btn">
                <i class="fi fi-rr-plus-small"></i>Add
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <div className="btn-add-topfold">
            <Link to="/">
              <button className="btn">
                <i class="fi fi-rr-arrow-small-left"></i>Back
              </button>
            </Link>
          </div>
          <div className="btn-add-topfold">
            <button className="btn">
              <i class="fi fi-rr-cross-small"></i>Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topfold;

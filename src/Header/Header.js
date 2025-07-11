import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {changeLanguage} from "../Redux/actions";

export default function Header() {
  let language = useSelector((state) => state.lang);

  const dispatch = useDispatch();

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Routing Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
            </ul>
            <div style={{ marginRight: "50px" }}>
              <select
                value={language}
                onChange={handleChangeLanguage}
                className="form-select"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

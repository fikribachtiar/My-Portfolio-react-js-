import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { withTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { withRouter, useLocation, Link } from "react-router-dom";
import "./style.css";
import {
  faHome,
  faUser,
  faTools,
  faPen,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";

// eslint-disable-next-line react/prop-types
const Navigation = ({ theme }) => {
  const [onPage, setOnPage] = useState(false);

  const setOnPageValue = (state) => {
    setOnPage(state);
  };

  useEffect(() => {
    setTimeout(() => setOnPageValue(true), 2900);
  }, []);
  // eslint-disable-next-line react/prop-types
  const { primary } = theme;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 501px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const location = useLocation();

  const selected = {
    color: "white",
    backgroundColor: primary,
    padding: "2px",
    borderRadius: "8px",
  };

  return (
    <CSSTransition in={onPage} timeout={1000} classNames="alert" unmountOnExit>
      <div className={styles.navigation} style={{ color: primary }}>
        {isDesktopOrLaptop && (
          <center>
            <div style={{ display: "flex" }}>
              <div>
                <Link to="/" className={styles.link}>
                  <FontAwesomeIcon
                    title="Home"
                    className={styles.icon}
                    size="3x"
                    icon={faHome}
                  />
                  <br />
                  {location.pathname === "/" && (
                    <span style={selected}>Home</span>
                  )}
                  {location.pathname !== "/" && <span>Home</span>}
                </Link>
              </div>
              <div>
                <Link to="profile" className={styles.link}>
                  <FontAwesomeIcon
                    title="Profile"
                    className={styles.icon}
                    size="3x"
                    icon={faUser}
                  />
                  <br />
                  {location.pathname === "/profile" && (
                    <span style={selected}>About</span>
                  )}
                  {location.pathname !== "/profile" && <span>About</span>}
                </Link>
              </div>

              <div>
                <Link to="skills" className={styles.link}>
                  <FontAwesomeIcon
                    title="Skills"
                    className={styles.icon}
                    size="3x"
                    icon={faTools}
                  />
                  <br />
                  {location.pathname === "/skills" && (
                    <span style={selected}>Skills</span>
                  )}
                  {location.pathname !== "/skills" && <span>Skills</span>}
                </Link>
              </div>

              <div>
                <Link to="works" className={styles.link}>
                  <FontAwesomeIcon
                    title="Works"
                    className={styles.icon}
                    size="3x"
                    icon={faPen}
                  />
                  <br />
                  {location.pathname === "/works" && (
                    <span style={selected}>Works</span>
                  )}
                  {location.pathname !== "/works" && <span>Works</span>}
                </Link>
              </div>

              <div>
                <Link to="/contact" className={styles.link}>
                  <FontAwesomeIcon
                    title="Contact"
                    className={styles.icon}
                    size="3x"
                    icon={faComment}
                  />
                  <br />
                  {location.pathname === "/contact" && (
                    <span style={selected}>Contact</span>
                  )}
                  {location.pathname !== "/contact" && <span>Contact</span>}
                </Link>
              </div>
            </div>
          </center>
        )}
        {isTabletOrMobile && (
          <center>
            <div style={{ display: "flex" }}>
              <div>
                <Link to="/" className={styles.link}>
                  <FontAwesomeIcon
                    title="Home"
                    className={styles.icon}
                    size="2x"
                    icon={faHome}
                  />
                  <br />
                  {location.pathname === "/" && (
                    <span style={selected} className={styles.label}>
                      Home
                    </span>
                  )}
                  {location.pathname !== "/" && (
                    <span className={styles.label}>Home</span>
                  )}
                </Link>
              </div>
              <div>
                <Link to="profile" className={styles.link}>
                  <FontAwesomeIcon
                    title="Profile"
                    className={styles.icon}
                    size="2x"
                    icon={faUser}
                  />
                  <br />
                  {location.pathname === "/profile" && (
                    <span style={selected} className={styles.label}>
                      About
                    </span>
                  )}
                  {location.pathname !== "/profile" && (
                    <span className={styles.label}>About</span>
                  )}
                </Link>
              </div>

              <div>
                <Link to="skills" className={styles.link}>
                  <FontAwesomeIcon
                    title="Skills"
                    className={styles.icon}
                    size="2x"
                    icon={faTools}
                  />
                  <br />
                  {location.pathname === "/skills" && (
                    <span style={selected} className={styles.label}>
                      Skills
                    </span>
                  )}
                  {location.pathname !== "/skills" && (
                    <span className={styles.label}>Skills</span>
                  )}
                </Link>
              </div>

              <div>
                <Link to="works" className={styles.link}>
                  <FontAwesomeIcon
                    title="Works"
                    className={styles.icon}
                    size="2x"
                    icon={faPen}
                  />
                  <br />
                  {location.pathname === "/works" && (
                    <span style={selected} className={styles.label}>
                      Works
                    </span>
                  )}
                  {location.pathname !== "/works" && (
                    <span className={styles.label}>Works</span>
                  )}
                </Link>
              </div>

              <div>
                <Link to="/contact" className={styles.link}>
                  <FontAwesomeIcon
                    title="Contact"
                    className={styles.icon}
                    size="2x"
                    icon={faComment}
                  />
                  <br />
                  {location.pathname === "/contact" && (
                    <span style={selected} className={styles.label}>
                      Contact
                    </span>
                  )}
                  {location.pathname !== "/contact" && (
                    <span className={styles.label}>Contact</span>
                  )}
                </Link>
              </div>
            </div>
          </center>
        )}
      </div>
    </CSSTransition>
  );
};

export default withRouter(withTheme(Navigation));

import React from "react";
import { useMediaQuery } from "react-responsive";
import { withTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, useLocation } from "react-router-dom";
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
    <div className={styles.navigation} style={{ color: primary }}>
      {isDesktopOrLaptop && (
        <center>
          <div style={{ display: "flex" }}>
            <div>
              <FontAwesomeIcon
                title="Home"
                className={styles.icon}
                size="3x"
                icon={faHome}
              />
              <br />
              {location.pathname === "/" && <span style={selected}>Home</span>}
              {location.pathname !== "/" && <span>Home</span>}
            </div>
            <div>
              <FontAwesomeIcon
                title="Profile"
                className={styles.icon}
                size="3x"
                icon={faUser}
              />
              <br />
              {location.pathname === "/profile" && (
                <span style={selected}>Profile</span>
              )}
              {location.pathname !== "/profile" && <span>Profile</span>}
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </center>
      )}
      {isTabletOrMobile && (
        <center>
          <div style={{ display: "flex" }}>
            <div>
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
            </div>
            <div>
              <FontAwesomeIcon
                title="Profile"
                className={styles.icon}
                size="2x"
                icon={faUser}
              />
              <br />
              <span className={styles.label}>Profile</span>
            </div>

            <div>
              <FontAwesomeIcon
                title="Skills"
                className={styles.icon}
                size="2x"
                icon={faTools}
              />
              <br />
              <span className={styles.label}>Skills</span>
            </div>

            <div>
              <FontAwesomeIcon
                title="Works"
                className={styles.icon}
                size="2x"
                icon={faPen}
              />
              <br />
              <span className={styles.label}>Works</span>
            </div>

            <div>
              <FontAwesomeIcon
                title="Contact"
                className={styles.icon}
                size="2x"
                icon={faComment}
              />
              <br />
              <span className={styles.label}>Contact</span>
            </div>
          </div>
        </center>
      )}
    </div>
  );
};

export default withTheme(withRouter(Navigation));

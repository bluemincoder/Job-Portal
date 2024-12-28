import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
  FaSquareGithub,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
      <>
          <footer>
              <div>
                  <img src="/logo.png" alt="logo" />
              </div>
              <div>
                  <h4>Support</h4>
                  <ul>
                      <li>39, Amritpuri Khajuri Kalan, Bhopal</li>
                      <li>minaalwork@gmail.com</li>
                      <li>+91 78793787XX</li>
                  </ul>
              </div>

              <div>
                  <h4>Quick Links</h4>
                  <ul>
                      <li to={"/"}>
                          <Link>Home</Link>
                      </li>
                      <li to={"/jobs"}>
                          <Link>Jobs</Link>
                      </li>
                      {isAuthenticated && (
                          <li>
                              <Link to={"/dashboard"}>Dashboard</Link>
                          </li>
                      )}
                  </ul>
              </div>
              <div>
                  <h4>Follow Us</h4>
                  <ul>
                      <li>
                          <a
                              href="https://x.com/bluemintweets"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <span>
                                  <FaSquareXTwitter />
                              </span>
                              <span>Twitter (X)</span>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://www.instagram.com/__.minaal07.__/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <span>
                                  <FaSquareInstagram />
                              </span>
                              <span>Instagram</span>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://github.com/bluemincoder"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <span>
                                  <FaSquareGithub />
                              </span>
                              <span>Github</span>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://linkedin.com/in/bluemincoder"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <span>
                                  <FaLinkedin />
                              </span>
                              <span>LinkedIn</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </footer>
          <div className="copyright">
              &copy; Copyright 2024. All Rights Reserved By Bluemincoder
          </div>
      </>
  );
};

export default Footer;

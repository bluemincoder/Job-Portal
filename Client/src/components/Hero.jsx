import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const Hero = () => {
  const details = [
      {
          id: 1,
          title: "1,23,441",
          subTitle: "Live Job",
          icon: <FaSuitcase />,
      },
      {
          id: 2,
          title: "91,220",
          subTitle: "Companies",
          icon: <FaBuilding />,
      },
      {
          id: 3,
          title: "2,34,200",
          subTitle: "Job Seekers",
          icon: <FaUsers />,
      },
      {
          id: 4,
          title: "1,03,761",
          subTitle: "Employers",
          icon: <FaUserPlus />,
      },
  ];
  return (
      <div className="heroSection">
          <div className="container">
              <div className="title">
                  <h1>Find Your Dream Job Today</h1>
                  <h4>
                      Connecting Talent with Opportunities Across the Nation for
                      Every Skill Level
                  </h4>
                  <p>
                      Explore a vast array of job listings in diverse
                      industries. Whether you're a seasoned professional or just
                      starting out, find the perfect role to advance your
                      career. Our platform makes job searching easy and
                      efficient, bringing you closer to your next big
                      opportunity.
                  </p>
              </div>
              <div className="image">
                  <img src="/heroS.jpg" alt="hero" />
              </div>
          </div>
          <div className="details">
              {details.map((element) => {
                  return (
                      <div className="card" key={element.id}>
                          <div className="icon">{element.icon}</div>
                          <div className="content">
                              <p>{element.title}</p>
                              <p>{element.subTitle}</p>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
  );
};

export default Hero;

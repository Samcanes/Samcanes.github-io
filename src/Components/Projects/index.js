import "./index.css";

import React from "react";

export default function Projects() {
  const projectData = [
    {
      name: "Exercise Tracker",
      liveLink:
        "https://boilerplate-project-exercisetracker.irtesamvirani.repl.co/",
      description: "Made while in FCC learning phase.",
      gitLink:
        "https://replit.com/@irtesamvirani/boilerplate-project-exercisetracker?v=1",
      blogLink: "",
    },
    {
      name: "Time Stamp Parser",
      liveLink: "https://boilerplate-project-timestamp.irtesamvirani.repl.co/",
      description: "Made while in FCC learning phase.",
      gitLink:
        "https://replit.com/@irtesamvirani/boilerplate-project-timestamp?v=1",
      blogLink: "",
    },
    {
      name: "Random Picks",
      liveLink: "https://codepen.io/mdsam211/full/qBrPGRz",
      description: "An app which shows random pickup lines",
      gitLink: "https://codepen.io/mdsam211/pen/qBrPGRz",
      blogLink: "",
    },
    {
      name: "A key Board drum",
      liveLink: "https://codepen.io/mdsam211/full/GRvrbBr",
      description:
        "Trying to add old project here to get motivation to complete it",
      gitLink: "https://codepen.io/mdsam211/pen/GRvrbBr",
      blogLink: "",
    },
  ];
  const renderProjects = (projectData) => {
    const projectCardsJSX = [];
    for (let each of projectData) {
      console.log(each);
      projectCardsJSX.push(
        <div className="p-2 bd-highlight">
          <div id="card" class="card">
            <iframe className="card-iframe" src={each.liveLink}></iframe>
            <div class="card-body">
              <p class="card-heading">{each.name}</p>
              <p class="card-text">{each.description} </p>
              <div className="d-flex justify-content-around">
                <div class="p-2 flex-fill bd-highlight">
                  <a href={each.gitLink}>
                    <i class="bi bi-github"></i>
                  </a>
                </div>
                <div class="p-2 flex-fill bd-highlight">
                  {/* <i class="bi bi-bootstrap-fill"></i> */}
                </div>
                <div class="p-2 flex-fill bd-highlight">
                  <a href={each.liveLink}>
                    <i class="bi bi-box-arrow-in-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return projectCardsJSX;
  };

  return (
    <>
      <div>
        <div className="d-flex flex-wrap justify-content-around bd-highlight example-parent">
          {renderProjects(projectData)}
        </div>
      </div>
    </>
  );
}

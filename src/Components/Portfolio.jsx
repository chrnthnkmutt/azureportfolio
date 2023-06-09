/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "The picture that I have some discussion with my professor";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Another Personal Website",
    description:
      "Creating a personal website with simple HTML, CSS, and JavaScript. This is a great way to learn the basics of web development.",
    url: "https://boatchrnthn.netlify.app",
  },
  {
    title: "[Microsoft Dev Skill Ep.1] How to create your first Visual Studio Code Extension",
    description:
      "Make the visual studio code extension on VS-code, by using some library and tricks from Node.js and TypeScript",
    url: "https://medium.com/@boatchrnthn/microsoft-dev-skill-ep-1-how-to-create-your-first-visual-studio-code-extension-f1384419076a",
  },
  {
    title: "[Microsoft Dev Skill Ep.2] Say hello to Azure OpenAI Service and Semantic Kernel",
    description:
      "Overview of what I learned and what I created during the workshop. I hope you enjoy reading it and get inspired to try out OpenAI yourself!",
    url: "https://medium.com/@boatchrnthn/microsoft-dev-skill-ep-2-say-hello-to-openai-service-and-semantic-kernel-6a6cf8d5b2e1",
  },
  {
    title: "[Microsoft Dev Skill Ep.3] Level Up with GitHub Codespaces and Copilot",
    description:
      "I will introduce you to these features and show you how they can help you level up your coding skills using GitHub Codespaces and GitHub Copilot.",
    url: "https://medium.com/@boatchrnthn/microsoft-dev-skill-ep-3-level-up-with-github-codespaces-and-copilot-5b85a5fd1b2a",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

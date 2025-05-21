// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built using React.js to showcase my
            skills and projects.
          </p>
          <a
            href="https://github.com/yourusername/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Node.js API</h3>
          <p>
            A RESTful API built with Node.js, Express, and PostgreSQL for user
            and role management.
          </p>
          <a
            href="https://github.com/yourusername/node-api"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Todo App</h3>
          <p>
            A simple full-stack todo application with React frontend and Node.js
            backend.
          </p>
          <a
            href="https://github.com/yourusername/todo-app"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Reservation Hotel page",
      img: IMG1,
      description:
        "Crafted a user-friendly hotel reservation page designed to enhance the booking experience for guests",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://master--friendly-zuccutto-791c3f.netlify.app/",
      github: "https://github.com/Munya5/Front-end-capstone-project",
    },
    {
      id: 2,
      title: "React-Calculator",
      img: IMG4,
      description:
        "Developed a dynamic calculator application using React, showcasing a clean and responsive design.",
      technologies: "HTML | CSS | JavaScript |",
      link: "https://astonishing-gelato-549522.netlify.app/",
      github: "https://github.com/Munya5/react-calculator",
    },
    {
      id: 3,
      title: "React Countdown-Timer ",
      img: IMG2,
      description: "Created a versatile countdown timer application with React, featuring a sleek and responsive design.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://master--flourishing-tiramisu-6f991f.netlify.app/",
      github: "https://github.com/Munya5/countdown-Timer",
    },
    {
      id: 4,
      title: "To-Do list 1",
      img: IMG3,
      description:
        "Developed an interactive to-do list application using React, designed for optimal productivity and ease of use.",
      technologies: "Html | CSS | JavaScript |",
      link: "https://master--elaborate-macaron-e11601.netlify.app/",
      github: "https://github.com/Munya5/todo-list",
    },
    {
      id: 5,
      title: "To-Do list 2",
      img: IMG5,
      description:
        "Built a sophisticated to-do list application using React, enhanced with advanced CSS for a visually appealing and user-friendly interface including prioritising todos.",
      technologies: "Html | CSS |",
      link: "https://master--enchanting-biscotti-1e8731.netlify.app/",
      github: "https://github.com/Munya5/to-do3",
    },
    {
      id: 6,
      title: "Personal blog",
      img: IMG6,
      description:
        "Currently developing a feature-rich blog website using React, aimed at providing a seamless reading and writing experience.",
      technologies: "Html | CSS | Javascript | MERN |",
      link: "https:",
      github: "https://github.com/Munya5/my-blog",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

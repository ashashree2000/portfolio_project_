import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Educational Course Recommendation System",
      description:
        "A Content Based Recommendation System that suggests courses based on user's input of a selected course. Techniques of NLP such as Pre-processing, Count Vectorization, Stemming, and Cosine Similarity are implemented.",
      technologies: [
        "Unsupervised Machine Learning",
        "Natural Language Processing",
        "Streamlit",
      ],
      githubLink:
        "https://github.com/your-username/Educational-Course-RecommendationSys",
    },
    {
      name: "Data Analysis and Pipelining",
      description:
        "Data analysis using various techniques on datasets to get started in the field of Data Science. Improved proficiency in statistical concepts and visualization libraries/tools.",
      technologies: [
        "Exploratory Data Analysis",
        "Transformations",
        "Feature Engineering",
      ],
      githubLink: "https://github.com/your-username/Upskilling-Data-Analytics",
    },
    {
      name: "Contextual Sentimental Analysis",
      description:
        "A Flask app that fetches NEWS articles mentioning a given name as per its related sentiment. Leveraged the Vader pre-trained NLP model, integrated Google custom search API, and a restful service to extract URLs.",
      technologies: ["Natural Language Processing", "Flask", "Google API"],
      githubLink: "https://github.com/your-username/Ethos-Hackathon",
    },
    {
      name: "Indian Sign Language Character Recognition",
      description:
        "A GUI that takes a real-time video of hand gestures of ISL as input and shows the output on screen by generating respective texts. Image pre-processing, Feature extraction, and clustering for Model creation.",
      technologies: ["Computer Vision", "Machine Learning", "OpenCV"],
      githubLink: "https://github.com/your-username/Character-Recognition-ISL",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <span className="font-bold text-gray-900">Technologies: </span>
                {project.technologies.join(", ")}
              </div>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-blue-500 hover:text-blue-700 font-bold">
                  View on GitHub
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

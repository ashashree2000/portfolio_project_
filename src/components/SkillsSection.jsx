import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Languages', items: ['Python', 'Java', 'C/C++', 'HTML/CSS', 'R', 'SQL'] },
    { name: 'Libraries/Frameworks', items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'NLTK', 'Plotly', 'Seaborn', 'OpenCV', 'TensorFlow', 'Keras', 'Flask', 'PyTorch', 'Scrapy', 'Spacy', 'Airflow'] },
    { name: 'Tools/Platforms', items: ['GitHub', 'VS Code', 'Git', 'Jupyter Notebook', 'MySQL', 'MongoDB', 'Tableau', 'Power BI', 'Excel', 'Google Sheets'] },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
              <ul className="list-disc pl-4">
                {category.items.map((item, index) => (
                  <li key={index} className="text-gray-700 mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
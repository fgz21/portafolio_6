import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const Timeline = () => {
  //array experiences
  const experiences = [
    {
      year: 2020,
      title: 'Restaurant Chinese Grill',
      description: 'I created an attractive and functional website for a restaurant, enhancing the customer experience and increasing online reservations. I used Bootstrap to create a responsive design and JavaScript to add interactivity, allowing customers to easily and intuitively explore the menu, make reservations, and obtain information about the restaurant.',
    },
    {
      year: 2021,
      title: 'Universitys community service',
      description: ' I designed and developed a web application for my universitys community service, using React.js with Tailwindcss as the main technology. This web application was designed to provide an efficient and easy-to-use platform for the university community, enabling the effective management and coordination of community activities and services. ',
    },
    {
      year: 2022,
      title: 'jrsecurity22cam',
      description: 'I established an attractive and effective landing page for a camera installation company, increasing the brands online visibility and impact. I used Bootstrap for a responsive design and JavaScript to add interactivity, creating an intuitive and effective user experience that captures visitors attention and converts them into potential clients.',
    },
    {
      year: 2023,
      title: 'Inmobiliary Lading Page ',
      description: 'I developed and designed an attractive and effective landing page for a real estate company, with the goal of converting visitors into clients. The page features a clear and modern structure, with sections including header, hero, features, properties, testimonials, call-to-action, and footer. I used Bootstrap and JavaScript to build the page, and ensured that it was responsive and visually appealing on different devices and screen sizes.',
    },

    {
      year: 2024,
      title: 'Chicksgold',
      description: 'I designed and developed attractive and functional user interfaces for ChicksGolds web platform using HTML, CSS, JavaScript, and frameworks like React. I collaborated with the design team to implement consistent visual designs and user experiences on the platform. I also worked with the back-end development team to integrate APIs and services into the platform.',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Work Experience</h2>
        <div className="flex flex-col items-start relative max-w-2xl mx-auto" id="Timeline">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gray-100 transform -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="flex items-start w-full mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 transform rotate-45 flex items-center justify-center text-gray-900 font-bold z-10 border-4 border-gray-900 relative">
                <div className="transform -rotate-45  ">
                  {experience.year}
                </div>
              </div>
              
              <Card className="ml-8 bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
                <Card.Content>
                  <Card.Header 
                    className="text-white" 
                    style={{ fontFamily: 'Permanent Marker, cursive' }}
                  >
                    {experience.title}
                  </Card.Header>
                  <Card.Meta className="text-gray-400">{experience.year}</Card.Meta>
                  <Card.Description className="text-gray-400">
                    {experience.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra> 
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
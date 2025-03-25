import React from "react";

const ExperiencedPeers = () => {
  // Sample mentor data
  const mentors = [
    {
      id: 1,
      name: "Thomas Lynn",
      field: "UI/UX Designer",
      image: "/assets/thomas.png"
    },
    {
      id: 2,
      name: "Alex Reena",
      field: "Web Development",
      image: "/assets/alex.png"
    },
    {
      id: 3,
      name: "Tom Curran",
      field: "Marketing",
      image: "/assets/tom.png"
    },
    {
      id: 4,
      name: "David Miller",
      field: "Digital Marketing",
      image: "/assets/david.png"
    }
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-12 md:mb-16 gap-8">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Connect With<br />
              <span className="text-blue-400">Experienced Peers</span>
            </h2>
          </div>
          
          {/* Description text */}
          <div className="max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              We are a passionate group of students committed to enhancing the college experience through peer mentorship. Our diverse backgrounds inspire us to create a supportive community for juniors to connect with seniors. Together, we empower students to thrive academically and personally.
            </p>
          </div>
        </div>
        
        {/* Card row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id} 
              className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-center relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="bg-white p-5 text-black">
                <h3 className="font-bold text-xl mb-1">{mentor.name}</h3>
                <p className="text-blue-600 font-medium">{mentor.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencedPeers; 
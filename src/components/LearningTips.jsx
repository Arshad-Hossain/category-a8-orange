import React from "react";

const LearningTips = () => {
  const tips = [
    {
      id: 1,
      title: "Use Active Learning Techniques",
      description:
        "Instead of passively watching videos, take notes, build small projects, and teach concepts to others. This helps you retain information much faster.",
      icon: "📘",
    },
    {
      id: 2,
      title: "Follow the Pomodoro Technique",
      description:
        "Study for 25 minutes, then take a 5-minute break. After 4 sessions, take a longer break. This improves focus and prevents burnout.",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Set Clear Weekly Goals",
      description:
        "Break your course into small milestones and assign them to specific days. This keeps you consistent and motivated throughout your learning journey.",
      icon: "🎯",
    },
  ];
  return (
    <section className="w-full bg-gray-50 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 my-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Learning Tips
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg">
            Improve your study habits and manage your time effectively.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-5 sm:gap-6 md:gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3"
        >
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 
                         shadow-sm hover:shadow-lg transition duration-300 
                         flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-3xl sm:text-4xl md:text-5xl mb-4">
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;

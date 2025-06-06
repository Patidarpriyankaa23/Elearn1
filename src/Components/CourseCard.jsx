import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={course.imageUrl || "https://via.placeholder.com/400x200"}
        alt={course.title}
      />
      <div className="p-6">
        <div className="font-semibold text-xl text-gray-800 mb-2">{course.title}</div>
        <p className="text-gray-600 text-sm mb-4">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
        <div className="flex justify-between items-center">
          <Link
            to={`/courses/${course._id}`}
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition-colors duration-200"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

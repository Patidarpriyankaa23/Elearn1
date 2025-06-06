import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 leading-tight">
              Unlock Your Potential <br /> with E-Learning
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Gain access to premium courses taught by expert instructors. Learn anytime, anywhere.
            </p>
            <a
              href="/register"
              className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 shadow-md transition"
            >
              Start Learning
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://png.pngtree.com/background/20211216/original/pngtree-educational-girl-taking-online-class-during-the-day-outdoor-smiling-photography-picture-image_1520878.jpg"
              alt="Learning"
              className="w-full rounded-xl shadow-2xl object-cover h-80 lg:h-96"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Why Learn With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Top Instructors</h3>
              <p className="text-gray-600">Learn from professionals with hands-on experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Learn Anytime</h3>
              <p className="text-gray-600">Study at your convenience with lifetime access to content.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Certification</h3>
              <p className="text-gray-600">Earn certificates that boost your career opportunities.</p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                src="https://bizanosa.com/wp-content/uploads/2017/11/29-Introduction-to-Programming-for-beginners.jpg"
                alt="Course 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Intro to Programming</h3>
              <p className="text-gray-600 mb-4">
                Start coding with beginner-friendly programming languages and build real projects.
              </p>
              <button className="bg-purple-700 text-white w-full py-2 rounded-full hover:bg-purple-800 transition">
                Enroll Now
              </button>
            </div>
            {/* Course 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                src="https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/full-stack-web-developer.png"
                alt="Course 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Full-Stack Web Dev</h3>
              <p className="text-gray-600 mb-4">
                Learn MERN stack (MongoDB, Express, React, Node) and deploy full apps.
              </p>
              <button className="bg-purple-700 text-white w-full py-2 rounded-full hover:bg-purple-800 transition">
                Enroll Now
              </button>
            </div>
            {/* Course 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1ptSsKs2vpgQ4PdT6dHPdQCL85jI6J-_DI8Xh-m0xF5HptIFBjWdiBC1L3uzUPZgysc&usqp=CAU"
                alt="Course 3"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Data Science & ML</h3>
              <p className="text-gray-600 mb-4">
                Analyze data, build ML models, and create visualizations using Python.
              </p>
              <button className="bg-purple-700 text-white w-full py-2 rounded-full hover:bg-purple-800 transition">
                Enroll Now
              </button>
            </div>

            {/* Course 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                src="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/Ma9aQb2DGh/article/Mf8af4eaca3f9b166f045b71fe61100671698987694871/hero/M3a7968025eb1d23e85d85e2d960449b91699239359648.webp"
                alt="Course 4"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                Learn design principles, Figma, and build interfaces that users love.
              </p>
              <button className="bg-purple-700 text-white w-full py-2 rounded-full hover:bg-purple-800 transition">
                Enroll Now
              </button>
            </div>

            {/* Course 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                src="https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg"
                alt="Course 5"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Cybersecurity Basics</h3>
              <p className="text-gray-600 mb-4">
                Understand security fundamentals and how to protect data from attacks.
              </p>
              <button className="bg-purple-700 text-white w-full py-2 rounded-full hover:bg-purple-800 transition">
                Enroll Now
              </button>
            </div>

            {/* Course 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <img
                src="https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960"
                alt="Course 6"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">DevOps Essentials</h3>
              <p className="text-gray-600 mb-4">
                Learn CI/CD, Docker, Kubernetes, and automate your software delivery process.
              </p>
              <button className="bg-purple-700 text-white w-full py-2 rounded-full hover:bg-purple-800 transition">
                Enroll Now
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
            {/* Footer */}
            <footer className="bg-purple-900 text-white py-10 mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold">E-Learning</h3>
            <p className="text-purple-300 mt-2">Empowering learners everywhere with flexible, expert-led education.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-purple-300">Email: support@elearning.com</p>
            <p className="text-purple-300">Phone: +91-9876543210</p>
            <p className="text-purple-300">Location: India</p>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-4 text-center text-sm text-purple-300">
          &copy; {new Date().getFullYear()} E-Learning. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;

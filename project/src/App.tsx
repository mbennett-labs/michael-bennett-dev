import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="mb-6 md:mb-0">
              <img 
                src="/profile.jpg.jpg" 
                alt="Michael Bennett" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Michael Bennett</h1>
              <p className="text-xl text-blue-200">Software Developer & Security Specialist</p>
              <div className="flex space-x-4 mt-6 justify-center">
                <a href="https://github.com/mbennett-labs" target="_blank" rel="noopener noreferrer" 
                  className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-50 transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/michael-bennett-a29a93103/" target="_blank" rel="noopener noreferrer"
                  className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-50 transition-colors">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <img 
                src="/profile2.jpg.jpg" 
                alt="Michael Bennett" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8">
            <li><a href="#about" className="text-blue-700 font-medium hover:text-blue-900">About</a></li>
            <li><a href="#experience" className="text-gray-600 font-medium hover:text-blue-900">Experience</a></li>
            <li><a href="#education" className="text-gray-600 font-medium hover:text-blue-900">Education</a></li>
            <li><a href="#skills" className="text-gray-600 font-medium hover:text-blue-900">Skills</a></li>
            <li><a href="#projects" className="text-gray-600 font-medium hover:text-blue-900">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 font-medium hover:text-blue-900">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 text-lg text-center mb-8">
              Software Developer and Security Specialist leveraging 10+ years of leadership experience 
              from a successful culinary career, seeking blockchain, cybersecurity, or full-stack development opportunities.
            </p>
            <p className="text-gray-700 mb-8">
              My unique background combines technical expertise from my BS in Software Development & Security 
              with operational excellence managing high-pressure environments and cross-functional teams. I 
              approach coding challenges with the same precision, efficiency, and problem-solving mindset that drove 
              my culinary success.
            </p>
            
            <h3 className="text-2xl font-semibold text-center mb-6">Core Competencies:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-blue-700 mb-2"><i className="fas fa-shield-alt text-2xl"></i></div>
                <h4 className="font-semibold">Cybersecurity & Secure Development</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-blue-700 mb-2"><i className="fas fa-layer-group text-2xl"></i></div>
                <h4 className="font-semibold">Full Stack Development</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-blue-700 mb-2"><i className="fas fa-link text-2xl"></i></div>
                <h4 className="font-semibold">Blockchain Technology</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-blue-700 mb-2"><i className="fas fa-brain text-2xl"></i></div>
                <h4 className="font-semibold">AI & Machine Learning</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-blue-700 mb-2"><i className="fas fa-users text-2xl"></i></div>
                <h4 className="font-semibold">Team Leadership</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-blue-700 mb-2"><i className="fas fa-chart-line text-2xl"></i></div>
                <h4 className="font-semibold">Process Optimization</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Professional Experience</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Job 1 */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Independent Technology Consultant</h3>
                  <p className="text-gray-600">Self-employed</p>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">
                  2020 - Present
                </span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Developed personal projects to build practical experience in software development</li>
                <li>Created automated solutions for small business inventory management</li>
                <li>Designed and implemented custom database solutions for resource tracking</li>
                <li>Built secure web applications focusing on data protection and best practices</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Executive Chef & Kitchen Operations Manager</h3>
                  <p className="text-gray-600">The Passenger</p>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">
                  2018 - 2019
                </span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Developed inventory tracking systems reducing waste by 15%</li>
                <li>Managed team scheduling and resource allocation using data-driven decision making</li>
                <li>Designed systematic workflows ensuring consistent quality delivery</li>
                <li>Conducted regular data analysis of costs and sales trends</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Degree 1 */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="text-blue-700 mr-4">
                  <i className="fas fa-graduation-cap text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Bachelor of Science</h3>
                  <p className="text-gray-700">Software Development and Security</p>
                  <p className="text-gray-600">University of Maryland Global Campus</p>
                  <p className="text-gray-600">Graduated May 2024 | GPA: 3.053</p>
                </div>
              </div>
              <div className="ml-12">
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Straight A's in all technical courses for final three semesters</li>
                  <li>Excellence in advanced security and software development</li>
                </ul>
              </div>
            </div>

            {/* Degree 2 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="text-blue-700 mr-4">
                  <i className="fas fa-university text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Associate of Science</h3>
                  <p className="text-gray-700">Health Science</p>
                  <p className="text-gray-600">SUNY Broome Community College</p>
                  <p className="text-gray-600">2011-2014</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-2">
                  <i className="fas fa-code text-blue-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <p className="text-gray-700 text-center">
                Python JavaScript SQL HTML/CSS TypeScript
              </p>
            </div>

            {/* Security */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-2">
                  <i className="fas fa-shield-alt text-blue-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Security</h3>
              </div>
              <p className="text-gray-700 text-center">
                Network Security Vulnerability Assessment Risk Management Secure Coding
              </p>
            </div>

            {/* Blockchain/Web3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-2">
                  <i className="fas fa-link text-blue-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Blockchain/Web3</h3>
              </div>
              <p className="text-gray-700 text-center">
                Smart Contracts Cryptocurrency NFT Infrastructure
              </p>
            </div>

            {/* AI/ML */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-2">
                  <i className="fas fa-brain text-blue-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold">AI/ML</h3>
              </div>
              <p className="text-gray-700 text-center">
                AI Agents Swarm Intelligence Machine Learning Hugging Face Transformers
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Model Development</h3>
                <p className="text-blue-600 mb-2">Hugging Face</p>
                <p className="text-gray-700 mb-4">
                  Exploring and developing machine learning models using Hugging Face's transformers library and model hub.
                </p>
                <div className="text-gray-600 font-medium mb-4">AI • ML • Python • Transformers</div>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Implemented custom ML models for sentiment analysis</li>
                  <li>Explored transformer architectures</li>
                  <li>Published models on Hugging Face Hub</li>
                </ul>
                <div className="space-y-3">
                  <a 
                    href="https://huggingface.co/Freakid/sentiment-analysis-model" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors"
                  >
                    View on Hugging Face <i className="fas fa-external-link-alt ml-2"></i>
                  </a>
                  <a 
                    href="https://hackmd.io/@xbBf1zpRTXaSATerS04iJg/HJqeav0oJe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
                  >
                    View Project Documentation <i className="fas fa-file-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Secure Cloud Application</h3>
                <p className="text-blue-600 mb-2">SDEV 400</p>
                <p className="text-gray-700 mb-4">
                  Cloud-based application implementing secure database integration and best practices in cloud security.
                </p>
                <div className="text-gray-600 font-medium mb-4">Cloud • Security • Database</div>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Implemented secure data protection measures</li>
                  <li>Deployed automated testing procedures</li>
                  <li>Achieved optimal performance metrics</li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vulnerability Analysis System</h3>
                <p className="text-blue-600 mb-2">SDEV 325</p>
                <p className="text-gray-700 mb-4">
                  Comprehensive framework for security assessment and vulnerability mitigation.
                </p>
                <div className="text-gray-600 font-medium mb-4">Security • Analysis • Python</div>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Created assessment framework</li>
                  <li>Implemented testing strategies</li>
                  <li>Documented security protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Let's Connect</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 text-center mb-8">
              I'm currently open to new opportunities in software development and security. Let's discuss how my unique background can benefit your team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <a href="mailto:mikebennett637@gmail.com" className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3 mb-3">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-700 text-center">mikebennett637@gmail.com</p>
              </a>
              
              <a href="tel:+12406598286" className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3 mb-3">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-700 text-center">(240) 659-8286</p>
              </a>
              
              <a href="https://www.linkedin.com/in/michael-bennett-a29a93103/" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3 mb-3">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-700 text-center">Connect with me</p>
              </a>
              
              <a href="https://github.com/mbennett-labs" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3 mb-3">
                  <i className="fab fa-github text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-700 text-center">View my code</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Michael Bennett. All rights reserved.</p>
          <p className="mt-2 text-blue-200">
            <a 
              href="https://github.com/mbennett-labs" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mbennett-labs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, Code, Shield, Database, Server, Award, User, Briefcase, GraduationCap, Trophy, ExternalLink } from 'lucide-react';

const Portfolio3D = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const Card3D = ({ children, className = "", delay = 0 }) => (
    <div 
      className={`transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 
                  bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 
                  shadow-2xl hover:shadow-cyan-500/20 ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(50px) rotateX(10deg)',
        opacity: isLoaded ? 1 : 0
      }}
    >
      {children}
    </div>
  );

  const FloatingCube = ({ size, position, delay }) => (
    <div 
      className={`absolute ${size} bg-gradient-to-br from-cyan-500/20 to-blue-600/20 
                  rounded-lg backdrop-blur-sm border border-cyan-500/30 animate-pulse`}
      style={{
        ...position,
        animation: `float 6s ease-in-out infinite ${delay}s, glow 4s ease-in-out infinite alternate`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingCube size="w-20 h-20" position={{top: '10%', right: '10%'}} delay={0} />
        <FloatingCube size="w-16 h-16" position={{top: '60%', left: '5%'}} delay={1} />
        <FloatingCube size="w-12 h-12" position={{top: '30%', right: '30%'}} delay={2} />
        <FloatingCube size="w-24 h-24" position={{bottom: '20%', right: '20%'}} delay={3} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-cyan-400">AP</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform transition-all duration-1000" style={{
            transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
            opacity: isLoaded ? 1 : 0
          }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Abinash Panigrahy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Cybersecurity Enthusiast & Software Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Motivated cybersecurity and software development professional with 1.5+ years of hands-on experience 
              in threat analysis, penetration testing, and full-stack development.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:panigrahyabinash62@gmail.com" 
                 className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Get In Touch
              </a>
              <button onClick={() => scrollToSection('projects')}
                      className="border border-cyan-500 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500/20 transition-all duration-300">
                View Work
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card3D delay={200}>
              <User className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated cybersecurity and software development enthusiast with a strong foundation in 
                network security, software engineering, and website design. With over 1.5 years of hands-on 
                experience, I specialize in threat analysis, scripting, penetration testing, and automation 
                with a security-first mindset.
              </p>
            </Card3D>
            <Card3D delay={400}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Security Focus</h4>
                  <p className="text-gray-400 text-sm">Ethical Hacking & SOC</p>
                </div>
                <div className="text-center">
                  <Code className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Development</h4>
                  <p className="text-gray-400 text-sm">Full-Stack MERN</p>
                </div>
                <div className="text-center">
                  <Database className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Data Analysis</h4>
                  <p className="text-gray-400 text-sm">Threat Detection</p>
                </div>
                <div className="text-center">
                  <Server className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-gray-400 text-sm">Cloud & Networking</p>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card3D delay={200}>
              <Shield className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Security & Networking</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Splunk, Wireshark, Nmap, Snort</p>
                <p>• Metasploit, Burp Suite, SQLmap</p>
                <p>• Cobalt Strike, MITRE ATT&CK</p>
                <p>• TCP/IP, VPN, SOC Monitoring</p>
              </div>
            </Card3D>
            <Card3D delay={400}>
              <Code className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Programming & Development</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Python, JavaScript, Bash</p>
                <p>• React, Node.js, Express</p>
                <p>• MongoDB, Git, Docker</p>
                <p>• PowerShell (basic)</p>
              </div>
            </Card3D>
            <Card3D delay={600}>
              <Server className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">IT Infrastructure</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Active Directory, DNS, DHCP</p>
                <p>• Office 365, SCCM, Intune</p>
                <p>• ServiceNow, JIRA, Zendesk</p>
                <p>• AWS Cloud, ITIL</p>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Experience</h2>
          <Card3D delay={200} className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Briefcase className="w-12 h-12 text-cyan-400 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400">Web Developer Intern</h3>
                <p className="text-xl text-gray-300 mb-2">Prodigy Infotech - Remote</p>
                <p className="text-gray-400 mb-4">Jan 2024 - Apr 2024</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Developed responsive web applications using HTML, CSS, JavaScript, and modern frameworks</li>
                  <li>• Collaborated with design teams to implement UI/UX best practices and accessibility standards</li>
                  <li>• Integrated RESTful APIs for dynamic data rendering and back-end interaction</li>
                  <li>• Improved page load speed and optimized performance using web performance tools</li>
                  <li>• Applied Git and GitHub for version control and project collaboration</li>
                </ul>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card3D delay={200}>
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Malware Scan Tool</h3>
              <p className="text-gray-400 mb-4">Python-based security tool</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Static signature-based malware detection</li>
                <li>• Suspicious file extension identification</li>
                <li>• Hash value generation for integrity verification</li>
                <li>• JSON-formatted reporting for incident response</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Security</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Malware Analysis</span>
              </div>
            </Card3D>
            <Card3D delay={400}>
              <Code className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Service Website</h3>
              <p className="text-gray-400 mb-4">Full-stack MERN application</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• React.js + Tailwind CSS responsive UI</li>
                <li>• Node.js/Express.js RESTful API</li>
                <li>• MongoDB database with Mongoose</li>
                <li>• JWT authentication with bcrypt hashing</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">JWT</span>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card3D delay={200}>
              <GraduationCap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-300 mb-2">Science College Autonomous, Hinjilicut</p>
              <p className="text-gray-400 mb-4">2022 - 2025 | Top 5% of class</p>
              <p className="text-gray-300">Focus: Networking, Data Structures, Data Science</p>
            </Card3D>
            <Card3D delay={400}>
              <Award className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Certified Ethical Hacker (CEH) - In Progress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">PenTest+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">OSCP - Preparing</span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Achievements</h2>
          <Card3D delay={200} className="max-w-4xl mx-auto">
            <Trophy className="w-12 h-12 text-cyan-400 mb-6 mx-auto" />
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Blue/Red Team SOC</h3>
                <p className="text-gray-300">Practical knowledge gained through hands-on experience</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Self-Driven Projects</h3>
                <p className="text-gray-300">Penetration testing and automation lab engagements</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Academic Excellence</h3>
                <p className="text-gray-300">Top 5% performer in BCA program</p>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-cyan-400">Get In Touch</h2>
          <Card3D delay={200}>
            <p className="text-xl text-gray-300 mb-8">
              Ready to collaborate or discuss opportunities? Let's connect!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:panigrahyabinash62@gmail.com" 
                 className="flex items-center justify-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Email</span>
              </a>
              <a href="tel:+918249487467" 
                 className="flex items-center justify-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span>Phone</span>
              </a>
              <a href="https://linkedin.com/in/abinash-panigrahy-5853a730a/" 
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="mt-8">
              <a href="https://github.com/abinash-Panigrahy" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                <Github className="w-5 h-5" />
                <span>View GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card3D>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center border-t border-gray-700">
        <p className="text-gray-400">
          © 2025 Abinash Panigrahy. Crafted with passion for cybersecurity and innovation.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Ameerpet, Hyderabad - 500038
        </p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          100% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio3D;
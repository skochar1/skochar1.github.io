import { Mail, Building, Heart, Star, Sparkles, Flower2, Coffee, BookOpen, Code, Terminal, Braces, Binary, Shield, Lock, Cpu, Database } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const backgroundIcons = [
  // Left side
  { Icon: Heart, x: "3%", y: "10%", delay: 0 },
  { Icon: Sparkles, x: "8%", y: "30%", delay: 1 },
  { Icon: Coffee, x: "5%", y: "50%", delay: 2 },
  { Icon: Code, x: "10%", y: "18%", delay: 0.3 },
  { Icon: Shield, x: "2%", y: "65%", delay: 1.8 },
  { Icon: Cpu, x: "7%", y: "82%", delay: 4.2 },
  { Icon: Binary, x: "12%", y: "42%", delay: 3.2 },
  { Icon: Flower2, x: "4%", y: "92%", delay: 4.5 },
  { Icon: Braces, x: "11%", y: "72%", delay: 2.2 },
  // Right side
  { Icon: Star, x: "89%", y: "8%", delay: 0.5 },
  { Icon: Flower2, x: "93%", y: "40%", delay: 1.5 },
  { Icon: BookOpen, x: "87%", y: "60%", delay: 2.5 },
  { Icon: Heart, x: "91%", y: "22%", delay: 3 },
  { Icon: Terminal, x: "95%", y: "35%", delay: 1.2 },
  { Icon: Lock, x: "88%", y: "55%", delay: 3.8 },
  { Icon: Database, x: "92%", y: "75%", delay: 2.8 },
  { Icon: Star, x: "90%", y: "88%", delay: 3.5 },
  { Icon: Coffee, x: "86%", y: "82%", delay: 5 },
  { Icon: Sparkles, x: "94%", y: "15%", delay: 4 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating background icons */}
      {backgroundIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: 0.6,
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <item.Icon size={36} className="text-purple-300" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16 pb-8 border-b border-gray-300">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <ImageWithFallback
                src="/IMG_4096.jpg"
                alt="Profile"
                className="w-48 h-48 object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl mb-3 text-gray-900">Shreya Kochar</h1>
              <p className="text-xl text-gray-700 mb-4">
                Pre-doctoral Research Fellow
              </p>
              <p className="text-gray-700 mb-4">Carnegie Mellon University</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:shreyako@cs.cmu.edu" className="hover:underline">
                    shreyako@cs.cmu.edu
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>Pittsburgh, PA</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="/cv.pdf"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curriculum Vitae (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me & Education side by side */}
        <div className="mb-12 pb-8 border-b border-gray-300 grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">About Me</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I am a Pre-doctoral Research Fellow at Carnegie Mellon SCS (CyLab/S3D), advised by Professor Norman Sadeh. I recently completed my Master's in Computer Science at Columbia University.
              </p>
              <p>
                My research interests lie at the intersection of privacy, security, law, and ethics. I'm very interested in game theory and formalisms for incentivizing corporations to follow privacy regulations.
                My current work has to do with regulating IoT data collection and exploring state-level privacy legislature. I enjoy writing both technical and law review works.
              </p>
              <p>
                Outside of research, I write on Substack about emerging
                privacy issues and new papers in the field. I also enjoy lifting at
                the gym and reading.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Education</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <p className="font-bold">[School TBA]</p>
                <p>Incoming Ph.D. student</p>
                <p className="text-gray-500 text-sm">Fall 2026 - Onwards</p>
              </li>
              <li>
                <p className="font-bold">Columbia University</p>
                <p>Masters in Computer Science</p>
                <p className="text-gray-500 text-sm">Jan. 2023 - May 2025</p>
              </li>
              <li>
                <p className="font-bold">Wellesley College</p>
                <p>Bachelors in Computer Science</p>
                <p className="text-gray-500 text-sm">Aug. 2019 - May 2022</p>
              </li>
              <li>
                <p className="font-bold">Massachusetts Institute of Technology</p>
                <p>Cross Registered Student</p>
                <p className="text-gray-500 text-sm">Aug. 2019 - May 2022</p>
              </li>
            </ul>
          </section>
        </div>

        {/* Research Interests */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-4 text-gray-900">Research Interests</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Differential privacy</li>
            <li>Synthetic data generation and applications</li>
            <li>AI and data ethics</li>
            <li>U.S. privacy legislature (at the state and federal level)</li>
            <li>Privacy and economic theory</li>
          </ul>
        </section>

        {/* Appointments */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-4 text-gray-900">Appointments and Experience</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between">
              <span><strong>Pre-doctoral Fellow</strong> at Carnegie Mellon University; advised by Norman Sadeh</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Oct. 2025 - Present</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Pre-doctoral Fellow</strong> at University of Chicago; advised by Professor Nick Feamster</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Jan. 2025 - Oct. 2025</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Founding Engineer</strong> at Avenio.ai</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">July 2025 - Sept. 2025</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Masters Thesis Student</strong> advised by Professor Steven M. Bellovin</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Jan. 2023 - May 2025</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Data Science Institute Scholar</strong> at Columbia's Bendesky Lab</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Jan. 2023 - Aug. 2023</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Research Assistant</strong> working with Professor Suman Jana</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Jan. 2023 - Aug. 2023</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Software &amp; Data Engineer</strong> at Microsoft C&amp;AI</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Nov. 2022 - July 2025</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Software Engineering Intern</strong> at Microsoft C&amp;AI</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">May 2022 - Aug. 2022</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Explore Intern</strong> at Microsoft C&amp;AI</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">May 2021 - Aug. 2021</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Research Assistant</strong> at MIT's Boyden Lab</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Aug. 2020 - Dec. 2020</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Research Intern</strong> at MIT's Littleton Lab</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">May 2020 - Aug. 2020</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Research Assistant</strong> at MIT's Sur Lab</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Jan. 2020 - May 2020</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Research Assistant</strong> at the Wiest Lab</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Aug. 2019 - Dec. 2019</span>
            </li>
          </ul>
        </section>

        {/* Teaching */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-4 text-gray-900">Teaching</h2>
          <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between">
              <span><strong>Research Supervisor</strong> appointed by Professor Steven M. Bellovin to mentor and oversee an undergraduate student on our ongoing project</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Spring 2024 – Present</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Teaching Assistant</strong> for Topics in Software Engineering (COMS E6156), Columbia University</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Spring 2025</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Teaching Assistant</strong> for Advanced Software Engineering (COMS W4156), Columbia University</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Fall 2024</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Teaching Assistant</strong> for Artificial Intelligence (CS232), Wellesley College</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Spring 2022</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Teaching Assistant</strong> for Introduction to Computer Science (CS111), Wellesley College</span>
              <span className="text-gray-500 whitespace-nowrap ml-4">Fall 2020</span>
            </li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-6 text-gray-900">Works and Publications [TBD, placeholder]</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  Quantifying Creepiness: Using Predictive Privacy to Measure Privacy Harms
                </strong>
              </p>
              <p className="text-gray-700 mb-1">
                <b>Kochar, S.</b> & Bellovin, S.M.
              </p>
              <p className="text-gray-600 mb-1">
                SSRN
              </p>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5939183" className="text-blue-600 hover:underline text-sm">
                [Paper pre-print]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Code (to be added)]
              </a>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  Predictive Privacy: A Framework for Quantifying Harm
                </strong>
              </p>
              <p className="text-gray-700 mb-1"><b>Kochar, S.</b></p>
              <p className="text-gray-600 mb-1">
                Columbia Academic Commons
              </p>
              <a href="https://academiccommons.columbia.edu/doi/10.7916/82f3-e448" className="text-blue-600 hover:underline text-sm">
                [Master's Thesis]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Code (to be added)]
              </a>
            </div>
          </div>
          <p className="mt-6">
            <a
              href="https://scholar.google.com/citations?user=R3Tcr_YAAAAJ&hl=en"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all works on Google Scholar
            </a>
          </p>
        </section>

        {/* Awards and Honors */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4 text-gray-900">Awards and Honors</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Appointed by Professor Norman Sadeh to join the Smart City Privacy Technologies project (funded by NSF).</li>
            <li>Law paper draft "Beyond Creepiness: Predictive Privacy" accepted to Privacy Law Scholars Conference (PLSC) 2025.</li>
            <li>Invited to roundtable on law and computer science. Hosted at University of Pennsylvania (2025).</li>
            <li>Accepted to attend The Cornell, Maryland, Max Planck Pre-doctoral Research School in Computer Science (CMMRS) 2025, with a EUR 1300 travel stipend.</li>
            <li>Received a $750 NSF travel grant to attend ACM Symposium (CS&amp;Law '25).</li>
            <li>Received a scholarship covering hotel, ticket, and expenses to attend TrustCon 2024.</li>
            <li>Invited to represent Professor Steven M. Bellovin at a roundtable on law and computer science. Hosted at University of Pennsylvania (2024).</li>
            <li>Selected as a Data Science Institute Scholar at Columbia. Received a $3000 research stipend.</li>
            <li>Received a $1000 NSF travel grant to attend ACM Symposium (CS&amp;Law '24).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

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

        {/* About Me */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-4 text-gray-900">About Me</h2>
          <div className="space-y-4 text-gray-700">
            <p>
            I am a Predoctoral Research Fellow at Carnegie Mellon SCS (CyLab), advised by Professor Norman Sadeh. I recently completed my Master's in Computer Science at Columbia University.
            </p>
            <p>
              My research interests lie at the intersection of privacy, security, law, and ethics. I'm very interested in game theory and formalisms for incentivizing corporations to follow privacy regulations.
              My current work has to do with regulating IoT data collection and exploring state-level privacy legislature. I enjoy writing both technical and law review works.            </p>
            <p>
              Outside of research, I write on Substack about emerging
              privacy issues and new papers in the field. I also enjoy lifting at
              the gym and reading books with political commentary.
            </p>
          </div>
        </section>

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

        {/* Publications */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-6 text-gray-900">Publications [TBD, placeholder]</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  [Efficient Transformers for Multimodal Learning]
                </strong>
              </p>
              <p className="text-gray-700 mb-1">
                Smith, J., Johnson, A., & Williams, B.
              </p>
              <p className="text-gray-600 mb-1">
                Advances in Neural Information Processing Systems (NeurIPS), 2025
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Paper]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Code]
              </a>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  Cross-lingual Transfer Learning in Low-Resource Settings
                </strong>
              </p>
              <p className="text-gray-700 mb-1">Smith, J., & Garcia, M.</p>
              <p className="text-gray-600 mb-1">
                Association for Computational Linguistics (ACL), 2024
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Paper]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Code]
              </a>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  Adaptive Neural Networks for Medical Image Segmentation
                </strong>
              </p>
              <p className="text-gray-700 mb-1">
                Chen, L., Smith, J., & Patel, R.
              </p>
              <p className="text-gray-600 mb-1">
                IEEE Transactions on Medical Imaging, 2024
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Paper]
              </a>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                <strong>Interpretable Machine Learning for Climate Prediction</strong>
              </p>
              <p className="text-gray-700 mb-1">
                Smith, J., Anderson, K., & Lee, S.
              </p>
              <p className="text-gray-600 mb-1">
                Nature Machine Intelligence, 2023
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Paper]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Data]
              </a>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                <strong>Few-Shot Learning with Graph Neural Networks</strong>
              </p>
              <p className="text-gray-700 mb-1">Smith, J., & Brown, T.</p>
              <p className="text-gray-600 mb-1">
                International Conference on Machine Learning (ICML), 2023
              </p>
              <p className="text-amber-600 mb-1">Best Paper Award</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Paper]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Code]
              </a>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  Robust Vision Transformers for Real-World Applications
                </strong>
              </p>
              <p className="text-gray-700 mb-1">
                Smith, J., Zhang, Y., & Kumar, A.
              </p>
              <p className="text-gray-600 mb-1">
                Computer Vision and Pattern Recognition (CVPR), 2022
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Paper]
              </a>
              {" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                [Code]
              </a>
            </div>
          </div>
          <p className="mt-6">
            <a
              href="https://scholar.google.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all publications on Google Scholar
            </a>
          </p>
        </section>

        {/* Awards and Honors */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4 text-gray-900">Awards and Honors</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Appointed by Professor Norman Sadeh to join the Smart City Privacy Technologies project (funded by the National Science Foundation, 2025–2028).</li>
            <li>Law paper draft "Beyond Creepiness: Predictive Privacy" accepted to Privacy Law Scholars Conference (PLSC) 2025. Invited to present.</li>
            <li>Invited to roundtable on law and computer science. Hosted at University of Pennsylvania (2025).</li>
            <li>Accepted to attend The Cornell, Maryland, Max Planck Pre-doctoral Research School in Computer Science (CMMRS) 2025, with a EUR 1300 travel stipend.</li>
            <li>Received a $750 NSF travel grant to attend ACM Symposium (CS&amp;Law '25).</li>
            <li>Invited to participate in Stanford HAI's invite-only "World Wide Knowledge AI Assistant" workshop in person.</li>
            <li>Invited to attend Stanford HAI's invite-only "Trusting Digital Content in the Age of AI" conference in person.</li>
            <li>Received a scholarship covering hotel, ticket, and expenses to attend TrustCon 2024.</li>
            <li>Accepted to attend "Designing Safe(r) Digital Intimacy" Workshop @ Berkman Klein Center for Internet &amp; Society. White paper in progress.</li>
            <li>Selected to supervise/advise an undergraduate student for research by Professor Steven M. Bellovin.</li>
            <li>Invited to represent Professor Steven M. Bellovin at a roundtable on law and computer science. Hosted at University of Pennsylvania (2024).</li>
            <li>Selected as a Data Science Institute Scholar at Columbia. Received a $3000 research stipend.</li>
            <li>Received a $1000 NSF travel grant to attend ACM Symposium (CS&amp;Law '24).</li>
            <li>Received a $500 travel grant to attend Stanford Treehacks by Stanford CS.</li>
            <li>Passed Azure Certified exams for AI Engineer and Azure Fundamentals.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

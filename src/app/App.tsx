import { Mail, Building } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-16 pb-8 border-b border-gray-300">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <ImageWithFallback
                src="https://drive.google.com/file/d/1iXwmOhJMcCcgU4y41jrM_VnFM4bUozmn/view?usp=sharing"
                alt="Profile"
                className="w-48 h-48 object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl mb-3 text-gray-900">Jane Smith</h1>
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
                  <span>Room 412, Computer Science Building</span>
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
              I am an Associate Professor in the Department of Computer Science at the
              University of Technology, where I lead the Machine Learning and Data
              Science Lab. My research focuses on developing novel algorithms for deep
              learning, natural language processing, and computer vision.
            </p>
            <p>
              Before joining the University of Technology, I was a postdoctoral
              researcher at MIT and completed my Ph.D. at Stanford University. My work
              has been published in top-tier conferences and journals including
              NeurIPS, ICML, CVPR, and Nature Machine Intelligence.
            </p>
            <p>
              I am passionate about bridging the gap between theoretical research and
              practical applications, and I actively collaborate with industry partners
              to deploy machine learning solutions in healthcare, education, and
              environmental sustainability.
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-4 text-gray-900">Research Interests</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Machine Learning and Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Multimodal Learning</li>
            <li>AI for Healthcare and Sustainability</li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-2xl mb-6 text-gray-900">Selected Publications</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-900 mb-1">
                <strong>
                  Efficient Transformers for Multimodal Learning
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
            <li>NSF CAREER Award, National Science Foundation, 2024</li>
            <li>Best Paper Award, International Conference on Machine Learning (ICML), 2023</li>
            <li>Outstanding Young Researcher Award, Association for Computational Linguistics, 2022</li>
            <li>Google Research Scholar Award, 2021</li>
            <li>MIT Technology Review 35 Under 35, 2021</li>
            <li>Excellence in Teaching Award, University of Technology, 2024</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

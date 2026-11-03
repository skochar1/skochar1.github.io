import { Mail, Building } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="mb-16 pb-8 border-b border-gray-300">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src="IMG_4625.png"
              alt="Profile"
              className="w-64 h-64 object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl mb-3 text-gray-900">Shreya Kochar</h1>
            <p className="text-xl text-gray-700 mb-4">
              Incoming Ph.D. Student
            </p>
            <p className="text-gray-700 mb-4">University of California, San Diego</p>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:shkochar@ucsd.edu" className="hover:underline">
                  shkochar@ucsd.edu
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>La Jolla, CA</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
                href="https://www.linkedin.com/in/shreyakochar/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://shreyakochar.substack.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500">CV available upon request</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Me & Education side by side */}
      <div className="mb-12 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl mb-4 text-gray-900">About Me</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              I am a Ph.D. student at UCSD, advised by Professor Deepak Kumar. Previously, I was a Pre-doctoral Research Fellow at Carnegie Mellon SCS (CyLab/S3D), advised by Professor Norman Sadeh. 
              My research interests lie at the intersection of privacy, security, law, and ethics. 

            </p>
            <p>
              Outside of research, I write on Substack about emerging privacy issues and new papers in the field. I also enjoy working out and reading.
            </p>
           
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-gray-900">Education</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <p className="font-bold">University of California, San Diego</p>
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
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
           Research Interests
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Internet measurement and algorithmic auditing</li>
          <li>Usable global privacy infrastructure</li>
          <li>Privacy-preserving data generation</li>
          <li>Data ethics, responsible computing, and legislation</li>
          <li>Privacy and economic theory</li>
        </ul>
      </section>

      {/* Appointments */}
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
           Experience
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between">
            <span><strong>Pre-doctoral Fellow</strong> at Carnegie Mellon University; advised by Professor Norman Sadeh</span>
            <span className="text-gray-500 whitespace-nowrap ml-4">Oct. 2025 - June 2026</span>
          </li>
          <li className="flex justify-between">
            <span><strong>Founding Engineer</strong> at Avenio.ai</span>
            <span className="text-gray-500 whitespace-nowrap ml-4">July 2025 - Sept. 2025</span>
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
        </ul>
      </section>

       {/* Ongoing Collaborations and Affiliations */}
       <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
           Ongoing Collaborations and Affiliations
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between">
            <span><strong>Affiliate Researcher</strong> at privacy-tech-lab, Wesleyan University; working with Professor Sebastian Zimmeck on Global Privacy Controls.</span>
          </li>
          <li className="flex justify-between">
            <span><strong>Affiliate Researcher</strong> at Max Planck Institute for Security and Privacy; working with Professor Asia Biega on consent and ownership models.</span>
          </li>
        </ul>
      </section>

      {/* Teaching */}
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
           Teaching
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="space-y-3 text-gray-700">
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
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
           Projects and Publications
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-gray-900 mb-1">
              <strong>
                Evaluating the Impact of Personalization in Conversational Cybersecurity Assistants
              </strong>
            </p>
            <p className="text-gray-700 mb-1">
              Duesterwald, L., Jain, A., <b>Kochar, S.</b>, & Sadeh, N.
            </p>
            <p className="text-gray-600 mb-1">
              The 2026 Human-Centered Privacy and Security for Language Models Workshop at COLM, forthcoming
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              [Paper (to be added)]
            </a>
          </div>

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
              GWU Journal of Law & Technology, Vol. 3, forthcoming
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
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Awards and Honors
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {/* <li>Awarded a $1025 grant to attend USENIX PEPR '26.</li> */}
          <li>Recognized as a Distinguished Reviewer at IMC `26 (STPC).</li>
          <li>
            Invited to attend the{" "}
            <a
              href="https://mlss2026.is.tuebingen.mpg.de/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Machine Learning Summer School 2026
            </a>
            {" "}with full funding.
          </li>
          {/* <li>
            Accepted to the AI Policy Clinic & Research Group at the{" "}
            <a
              href="https://www.caidp.org/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CAIDP
            </a>
            .
          </li> */}
          <li>Awarded the Jacobs School of Engineering/Powell Fellowship for first-year Ph.D. funding.</li>
          {/* <li>Awarded a $1000 grant to attend USENIX NSDI '26.</li> */}
          <li>Appointed by Professor Norman Sadeh to join the Smart City Privacy Technologies project (funded by NSF).</li>
          <li>"Beyond Creepiness: Predictive Privacy" accepted to Privacy Law Scholars Conference (PLSC) 2025.</li>
          <li>Accepted to the Cornell, Maryland, Max Planck Pre-doctoral Research School in Computer Science (CMMRS) 2025.</li>
          {/* <li>Awarded a $750 NSF grant to attend ACM Symposium (CS&amp;Law '25).</li> */}
          <li>Selected as a Data Science Institute Scholar at Columbia. Received a $3000 research stipend.</li>
          {/* <li>Received a $1000 NSF travel grant to attend ACM Symposium (CS&amp;Law '24).</li> */}
        </ul>
      </section>

      {/* Invited Talks */}
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
           Invited Talks
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Invited to present my master's dissertation and the "Predictive Privacy" framework at Carnegie Mellon University's "Current Topics in Privacy Seminar" series.</li>
          <li>Invited to present the "Predictive Privacy" framework at the University of Pennsylvania Center for Technology, Innovation, & Competition's Roundtable on Law and Computer Science. Proceeding available on request.</li>
          <li>Law paper draft "Beyond Creepiness: Predictive Privacy" accepted to Privacy Law Scholars Conference (PLSC) 2025. Invited to present. Proceeding available on request (Note: paper name changed to "Quantifying Creepiness: Using Predictive Privacy to Measure Privacy Harms")</li>
        </ul>
      </section>

      {/* Service */}
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Service
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>PoPETS '27 - Tadpole Reviewer (Program Committee); Artifacts Evaluation Committee</li>
          <li>ISoPE '26 - Technical Program Committee</li>
          <li>PoPETS '26 - Artifacts Evaluation Committee</li>
          <li>W3C Privacy Working Group - Invited Expert</li>
          <li>ACM CAIS '26 - Artifacts Evaluation Committee</li>
          <li>ACM IMC '26 - Shadow Technical Program Committee (STPC)</li>
        </ul>
      </section>
      {/* Community Opportunities */}
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Community Opportunities
          </h2>
          <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
        </div>
        <div className="space-y-2 text-gray-700">
          <p className="font-semibold">Updates incoming</p>
          <p>
            Check back for updates!
          </p>
        </div>
      </section>
    </div>
  );
}

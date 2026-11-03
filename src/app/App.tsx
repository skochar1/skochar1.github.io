import { Heart, Star, Sparkles, Flower2, Coffee, BookOpen, Code, Terminal, Braces, Binary, Shield, Lock, Cpu, Database } from "lucide-react";
import { motion } from "motion/react";
import { HashRouter, Routes, Route } from "react-router";
import { Nav } from "./components/Nav";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";

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
    <HashRouter>
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
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
    </HashRouter>
  );
}

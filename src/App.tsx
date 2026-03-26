/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Music, User, Users } from "lucide-react";

const AudioCard = ({ title, icon: Icon, src, duration }: { title: string; icon: any; src?: string; duration?: string }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3 transition-all hover:border-blue-300">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded bg-blue-50">
          <Icon className="w-4 h-4 text-blue-600" />
        </div>
        <span className="font-semibold text-xs text-gray-600 uppercase tracking-wide">{title}</span>
      </div>
      <span className="text-[10px] font-medium text-gray-400">{duration || "0:00"}</span>
    </div>
    <audio controls className="w-full h-8">
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

interface GroupData {
  mixture: { src: string; duration: string };
  s1: { src: string; duration: string };
  s2: { src: string; duration: string };
  spkA: { src: string; duration: string };
  spkB: { src: string; duration: string };
}

const GroupSection = ({ groupNumber, data }: { groupNumber: number; data: GroupData }) => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xl font-bold text-gray-800">Group {groupNumber}</h2>
      <div className="h-px flex-1 bg-gray-100"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-3">
        <AudioCard title="Mixture" icon={Users} src={data.mixture.src} duration={data.mixture.duration} />
      </div>
      <AudioCard title="Source 1" icon={Music} src={data.s1.src} duration={data.s1.duration} />
      <AudioCard title="Source 2" icon={Music} src={data.s2.src} duration={data.s2.duration} />
      <AudioCard title="Speaker A" icon={User} src={data.spkA.src} duration={data.spkA.duration} />
      <AudioCard title="Speaker B" icon={User} src={data.spkB.src} duration={data.spkB.duration} />
    </div>
  </motion.section>
);

export default function App() {
  // 你可以在这里修改音频的路径和时长
  const audioData: Record<number, GroupData> = {
    1: {
      mixture: { src: "/audio/g1_mix.mp3", duration: "0:10" },
      s1: { src: "/audio/g1_s1.mp3", duration: "0:10" },
      s2: { src: "/audio/g1_s2.mp3", duration: "0:10" },
      spkA: { src: "/audio/g1_a.mp3", duration: "0:10" },
      spkB: { src: "/audio/g1_b.mp3", duration: "0:10" },
    },
    2: {
      mixture: { src: "/audio/g2_mix.mp3", duration: "0:12" },
      s1: { src: "/audio/g2_s1.mp3", duration: "0:12" },
      s2: { src: "/audio/g2_s2.mp3", duration: "0:12" },
      spkA: { src: "/audio/g2_a.mp3", duration: "0:12" },
      spkB: { src: "/audio/g2_b.mp3", duration: "0:12" },
    },
    3: {
      mixture: { src: "/audio/g3_mix.mp3", duration: "0:08" },
      s1: { src: "/audio/g3_s1.mp3", duration: "0:08" },
      s2: { src: "/audio/g3_s2.mp3", duration: "0:08" },
      spkA: { src: "/audio/g3_a.mp3", duration: "0:08" },
      spkB: { src: "/audio/g3_b.mp3", duration: "0:08" },
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Speech Separation Demo <span className="text-blue-600 font-normal text-lg">(Baseline)</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <GroupSection groupNumber={1} data={audioData[1]} />
        <GroupSection groupNumber={2} data={audioData[2]} />
        <GroupSection groupNumber={3} data={audioData[3]} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 mt-10">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="text-gray-400 text-xs">
            © 2026 Speech Separation
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-100"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}




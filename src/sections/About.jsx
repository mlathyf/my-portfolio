import { skills } from "../constants";

export default function About() {
  return (
    <section id="about" className="w-full py-16 px-8 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex-1 space-y-4 text-center md:text-left ">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg leading-relaxed text-white/90">
            I am a Full-stack Developer with a deep focus on the React
            ecosystem. I thrive in the space where logic meets creativity. My
            goal is to build digital products that are not only visually
            stunning but also technically sound and accessible to everyone. I am
            constantly learning new technologies to stay at the forefront of
            modern web standards.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
            My Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="px-4 py-2 uppercase text-sm tracking-widest bg-white/10 border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/50 transition-colors cursor-default"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-4xl scroll-mt-20 flex-col items-start gap-4 px-6 py-24"
    >
      <h1 className="text-4xl font-bold text-slate-100">Navdeep Mangat</h1>
      <p className="text-lg text-slate-300">Software Developer</p>
      <p className="max-w-2xl text-slate-400">
        Intro i.e. who I am, what I've worked on, interests, ect.
      </p>
      <div className="mt-2 flex gap-4">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}

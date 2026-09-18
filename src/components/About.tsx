import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-2xl scroll-mt-16 flex-col items-start gap-4 px-6 py-20"
    >
      <h1 className="text-3xl font-semibold text-ink">Navdeep Mangat</h1>
      <p className="text-sm text-muted">Software Developer</p>
      <p className="max-w-lg leading-relaxed text-ink/90">
        Intro i.e. who I am, what I've worked on, interests, ect.
      </p>
      <div className="mt-2 flex gap-5">
        <a
          href="https://github.com/nsmangat"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-signal"
        >
          <FaGithub className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/navdeep-mangat"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-signal"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

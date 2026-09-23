import { FaGithub, FaLinkedin } from "react-icons/fa6";

// Add a path (e.g. "/profile.jpg") to show a photo next to the intro.
const profileImage = "";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-4xl scroll-mt-16 flex-col items-start gap-6 px-6 py-20 sm:flex-row sm:items-center"
    >
      {profileImage && (
        <img
          src={profileImage}
          alt="Navdeep Mangat"
          className="h-28 w-28 shrink-0 rounded-full border border-line object-cover"
        />
      )}
      <div className="flex flex-1 flex-col items-start gap-4">
        <h1 className="text-3xl font-semibold text-ink">Navdeep Mangat</h1>
        <p className="text-sm text-muted">Software Developer</p>
        <p className="leading-relaxed text-ink/90">
          I'm Navdeep Mangat, a software developer with a bachelor's degree in
          Computer Science. My professional experience has mostly dealt with web
          and desktop development in full-stack roles, though I have a
          preference for backend development. <br />
          Currently, I have a keen interest in machine learning, especially
          reinforcement learning. I love the idea of teaching an AI to do a task
          like playing a game through a reward and penalty system, and visibly
          seeing the AI improve and utilize better strategies to maximize the
          rewards. <br />A random fact about me is that I used to be in pharmacy
          school before deciding to pursue software development.
          <br />
          Thanks for taking the time to look through my portfolio! Feel free to
          look at my work and projects on my GitHub, or contact me through
          LinkedIn.
        </p>
        <div className="mt-2 flex gap-5">
          <a
            href="https://github.com/nsmangat"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-signal"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/navdeep-mangat"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-signal"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

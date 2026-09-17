import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Projects />
      </main>
    </>
  );
}

export default App;

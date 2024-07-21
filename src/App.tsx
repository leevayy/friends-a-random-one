import "./App.css";
import dockerLogo from "./assets/docker.svg";
import githubActionsLogo from "./assets/gh-actions.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <a href="https://docker.com" target="_blank">
          <img src={dockerLogo} className="logo" />
        </a>
        <a href="https://github.com" target="_blank">
          <img src={githubActionsLogo} className="logo" />
        </a>
      </div>
      <h1>+ Docker</h1>
      <h1>+ Github Actions</h1>
    </>
  );
}

export default App;

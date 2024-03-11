
import variables from '../../scss/variables.module.scss'

export default function Projects() {
  return (
    <div>
      <h1 style={{color: variables.primaryColor}}>My Projects</h1>
      <ul>
        <li>
            <a>Project 1</a>
        </li>
        <li>
            <a>Project 2</a>
        </li>
      </ul>
        <a>Go back to Home</a>
    </div>
  );
}
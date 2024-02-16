import Upload from "./Upload"
import { useContext } from 'react'
import projectContext from '../context/projectContext';

function Home() {
  const context = useContext(projectContext)
  const { projects, setprojects } = context;
  return (
    <div>
      <Upload title="Click Here To Upload👇" desc="Upload" />
      <h2>Your Projects</h2>
      {projects.map((project) => {
        return project.title;
      })}
    </div>
  )
}

export default Home

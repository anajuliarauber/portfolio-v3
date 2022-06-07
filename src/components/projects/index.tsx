import { useEffect, useState } from "react";
import { ProjectItem } from "../projectItem";

interface ProjectsProps {
    name: string,
    html_url: string,
    language: string,
    private: boolean
}


export function Projects(){
    const [projects, setProjects] = useState([])

  useEffect(()=>{
      fetch("https://api.github.com/users/anajuliarauber/repos")
      .then((response)=> response.json())
      .then((data) => setProjects(data))
  }, [projects])


    return(
        <div id="projects">
        {projects.filter((project:ProjectsProps)=> project.private === false && project.name !== "anajuliarauber").slice(0,5).map((project, index)=> {return(
            <ProjectItem key={index} project={project}/>
        )})}
        
        </div>
    )
}
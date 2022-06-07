export interface ProjectItemProps {
    project: {
        name: string,
        html_url: string,
        language: string,
        description: string
    }
}

export function ProjectItem(props: ProjectItemProps) {
    return (
        <>
            <h3>{props.project.name}</h3>
            <p><strong>Description:</strong> {props.project.description}</p>
            <p>Most used language in this project: {props.project.language}</p>
            <a href={props.project.html_url} target="_blank">Click to go to repository</a>
        </>
    )
}
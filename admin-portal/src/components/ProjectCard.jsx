function ProjectCard({ project, onDelete}) {
    return (
        <article className="project-card">

        <button className="delete-button" onClick={() => onDelete(project.id)}>X</button>

        <div>
            <p className="project-title">{project.title}</p>
            <p className="project-description">{project.description}</p>
        </div>

        </article>

    )
}
export default ProjectCard;
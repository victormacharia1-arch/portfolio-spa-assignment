import ProjectCard from "../components/ProjectCard";

function ProductList( {projects, onDelete}) {
    if ( projects.length === 0) {
        return <p className="empty message">No projects found.</p>;
    }

    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onDelete={onDelete} />
            ))}
        </div>
    );
}
export default ProductList;
import { useState } from "react";

const emptyform = {
    title: "",
    description: "",
}

function AddProjectForm({ onAddProject }) {
    const [formData, setFormData] = useState(emptyform);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        const newProject = {
            id: Date.now(),
            title: formData.title,
            description: formData.description
        };
        onAddProject(newProject);
        setFormData(emptyform);
    }


    

    return (
        <section className="form-section">
            <div className="section-heading">
                <div>
                    <p id="P-tags">Add Something New</p>
                    <h2>Add Project</h2>

                </div>
            </div>

            <form className="project-form" onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                    
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>   

                <label className="full-width">
                    Description
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Enter a brief description of the project"
                    />
                </label>

                
                   <button type="submit">Add</button>
    
            
            </form>
        </section>
    );
}

export default AddProjectForm;

const newForm = async (event) => {
    event.preventDefault();

    const projectName = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-details').value.trim();

    if (projectName && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ projectName, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create project');
        }
    }
};
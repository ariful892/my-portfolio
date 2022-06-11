import { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);


    return [projects, setProjects];
}

export default useProjects;
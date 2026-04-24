import MenuCard from './components/menu';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
    const fetchData = () => {
        axios.get('http://localhost:8000/two').then(response => {
            console.log(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1><MenuCard/></h1>
        </div>
    )
}

export default App

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

    const sendfetch = async () => {
        const res = await fetch('http://localhost:8000/login', {
        method: "POST",
        headers: {
            "Content-Type": "aplicacion/json"
        },
        body: JSON.stringify({
            text: "hello"
        })
    });
}
}

export default App

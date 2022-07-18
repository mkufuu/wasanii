import './App.css';
import Colony from './components/Colony';
import { useState, useEffect } from 'react';

const App = () => {
    const [wakadinali, setWakadinali] = useState([]);

    useEffect(() => {
        const fetchWakadinali = async () => {
            try {
                const response = await window.fetch('repository/wakadinali.json');
                const jsonData = await response.json();

                setWakadinali(jsonData);
            } catch (error) {
                setWakadinali([]);
            }
        }

        fetchWakadinali();
    }, []);

    return <div className="app">
        <header className="app-header">
            <h1>Wasanii</h1>
        </header>

        <Colony name="Wakadinali" artists={wakadinali} />
    </div>;
}

export default App;

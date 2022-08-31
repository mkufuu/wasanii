import React from 'react'
import { useEffect, useState } from 'react'
import Colony from './components/Colony';

function Body() {
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
        <header className="py-5 mb-3 d-flex justify-content-center align-items-center" style={{backgroundColor: 'blanchedalmond'}}>
            <h1 className="display-1">Wasanii</h1>
        </header>

        <Colony name="Wakadinali" artists={wakadinali} />
    </div>;
}

export default Body
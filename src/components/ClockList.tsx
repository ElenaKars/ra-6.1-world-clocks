import React, { useState } from 'react';
import Clock from './Clock';

const ClockList: React.FC = () => {
    const [clocks, setClocks] = useState<{ cityName: string; timezoneOffset: number; }[]>([]);
    const [cityName, setCityName] = useState<string>('');
    const [timezoneOffset, setTimezoneOffset] = useState<number>(0);

    const handleAddClock = () => {
        // Проверяем, есть ли уже такой город в списке
        const isCityAlreadyAdded = clocks.some((clock) => clock.cityName === cityName);

        if (!isCityAlreadyAdded) {
            setClocks([...clocks, { cityName, timezoneOffset }]);
            setCityName('');
            setTimezoneOffset(0);
        }
    };

    const handleRemoveClock = (index: number) => {
        const updatedClocks = [...clocks];
        updatedClocks.splice(index, 1);
        setClocks(updatedClocks);
    };

    return (
        <div>
            <h1>Мировые часы</h1>
            <div>
                <label htmlFor="cityName">Название города:</label>
                <input type="text" id="cityName" value={cityName} onChange={(e) => setCityName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="timezoneOffset">Временная зона (GMT):</label>
                <input type="number" id="timezoneOffset" value={timezoneOffset} onChange={(e) => setTimezoneOffset(parseInt(e.target.value))} required />
            </div>
            <button onClick={handleAddClock}>Добавить</button>
            <div className="clock-list">
                {clocks.map((clock, index) => (
                    <Clock
                        key={index}
                        cityName={clock.cityName}
                        timezoneOffset={clock.timezoneOffset}
                        onRemove={() => handleRemoveClock(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClockList;
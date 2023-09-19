// Clock.tsx
import React, { useEffect, useState } from 'react';

interface ClockProps {
    cityName: string;
    timezoneOffset: number;
    onRemove: () => void;
}

const Clock: React.FC<ClockProps> = ({ cityName, timezoneOffset, onRemove }) => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const gmtTime = new Date(); // Создаем объект Date для времени Гринвича
            const localTime = new Date(gmtTime.getTime() + timezoneOffset * 60 * 60 * 1000);
            setTime(`${localTime.getUTCHours().toString().padStart(2, '0')}:${localTime.getUTCMinutes().toString().padStart(2, '0')}:${localTime.getUTCSeconds().toString().padStart(2, '0')}`);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [timezoneOffset]);

    return (
        <div className="clock">
            <div>{cityName}</div>
            <div>{time}</div>
            <button onClick={onRemove}>Удалить</button>
        </div>
    );
};

export default Clock;

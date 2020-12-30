import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      updateClock();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function updateClock() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <Time>
      <p>{time}</p>
    </Time>
  );
}

export default Clock;

const Time = styled.div`
  height: 500px;
  width: 800px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 70px;
  font-family: 'Orbitron', sans-serif;
  color: #49fb35;
  font-size: 110px;
`;

import React, { useState } from 'react';
import Calendar from '../dist/esm';
import 'react-calendar/dist/Calendar.css';

import './Sample.css';

export default function Sample() {
  const [value, onChange] = useState(new Date());

  const dates = [];
  dates.push(new Date(2023, 2, 3));
  dates.push(new Date(2023, 2, 4));
  dates.push(new Date(2023, 2, 8));
  dates.push(new Date(2023, 2, 12));
  dates.push(new Date(2023, 2, 16));
  dates.push(new Date(2023, 2, 17));
  dates.push(new Date(2023, 2, 23));
  dates.push(new Date(2023, 2, 31));

  return (
    <div className="Sample">
      <header>
        <h1>react-calendar sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} values={dates} />
        </main>
      </div>
    </div>
  );
}

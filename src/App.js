import React from 'react';

import { CalendarContainer } from './containers';
import { EventsProvider } from './context';

function App() {
  return (
    <EventsProvider>
      <CalendarContainer />
    </EventsProvider>
  );
}

export default App;

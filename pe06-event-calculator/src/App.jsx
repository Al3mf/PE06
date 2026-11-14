import './App.css'
import EventSummary from './components/EventSummary'
import { calculateTotalCost } from './utils/ticketCalculator'

/** Predefined event data. */
const event = {
  name: 'CityU Tech Meetup',
  ticketPrice: 15,
  attendeeCount: 6
};

function App() {
  const totalCost = calculateTotalCost(event.ticketPrice, event.attendeeCount);

  return (
    <main className="app">
      <h1>Simple Event Cost Calculator</h1>
      <EventSummary
        eventName={event.name}
        ticketPrice={event.ticketPrice}
        attendeeCount={event.attendeeCount}
        totalCost={totalCost}
      />
    </main>
  )
}

export default App
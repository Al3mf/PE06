/**
 * Displays the event information and the total cost.
 * @param {Object} props
 * @param {string} props.eventName - The name of the event.
 * @param {number} props.ticketPrice - The price of one ticket.
 * @param {number} props.attendeeCount - The number of attendees.
 * @param {number} props.totalCost - The calculated total cost.
 */
function EventSummary({ eventName, ticketPrice, attendeeCount, totalCost }) {
  return (
    <section className="event-card">
      <h2>{eventName}</h2>
      <p>Ticket price: ${ticketPrice.toFixed(2)}</p>
      <p>Attendees: {attendeeCount}</p>
      <p className="total">Total cost: ${totalCost.toFixed(2)}</p>
    </section>
  )
}

export default EventSummary
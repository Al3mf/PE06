/**
 * Calculates the total ticket cost for an event.
 * @param {number} ticketPrice - The price of one ticket in dollars.
 * @param {number} attendeeCount - The number of people attending.
 * @returns {number} The total cost in dollars.
 */
export function calculateTotalCost(ticketPrice, attendeeCount) {
  return ticketPrice * attendeeCount;
}
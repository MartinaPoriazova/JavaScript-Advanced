function solve(ticketsDescription, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    ticketsDescription.forEach(ticket => {
        let [destination, price, status] = ticket.split("|");
        tickets.push(new Ticket(destination, price, status));
    });

    let sorted = sortingCriterion === 'price'
        ? tickets.sort((a, b) => (a[sortingCriterion] - b[sortingCriterion]))
        : tickets.sort((a, b) => (a[sortingCriterion].localeCompare(b[sortingCriterion])));

    return sorted;
}

console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));

console.log(solve([
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));
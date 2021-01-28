// Randomly generate a fake allFlights JSON file

const fs = require("fs")
const numFlights = Math.floor(Math.random() * 10) + 16; // 16 - 26 random number

let fakeFlights = []
for (i = 1; i < numFlights; i++) {
    const chairs = Math.floor(Math.random() * 6) + 2;
    const name = 'Flight ${i}';
    const location = ["Seville", "Berlin", "Seville"] [Math.floor(Math.random() * 3)];
    fakeFlights.push(
        {
            name: name,
            capacity: chairs,
            isAvailable: true,
            location: location
        }
    )
}

let data = JSON.stringify({
    flights: fakeFlights
});
fs.writeFileSync(__dirname + "/allFlights.json", data);
const readline = require('readline');

const cars = {
    S: {
      SeatCapacity: 5,
      Cost: 5000
    },
    M: {
      SeatCapacity: 10,
      Cost: 8000
    },
    L: {
      SeatCapacity: 15,
      Cost: 12000
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function findOptimizedCost(seatsNeeded) {
    let minCost = Infinity;
    let optimzedSeat;
    let result;

    for (let size in cars){
        const seatInfo = cars[size];
        const seatCost = seatInfo.Cost;
        const numberOfSeatsNeeded = Math.ceil(seatsNeeded / seatInfo.SeatCapacity);
        const totalCost = numberOfSeatsNeeded * seatCost;

        if(totalCost < minCost){
            minCost = totalCost;
            optimzedSeat = numberOfSeatsNeeded;
            result = {
                size,
                SeatCapacity: seatInfo.SeatCapacity,
                Cost: seatInfo.Cost,
                NumberOfSeatsNeeded: optimzedSeat,
                CostPerPerson: seatCost,
                TotalCost: totalCost,
            };
        }
    }
    return result;
}

rl.question("Please input number (seat): ", answer => {
    const seatsNeeded = parseInt(answer);
    const optimizedAnswer = findOptimizedCost(seatsNeeded);
    console.log(`${optimizedAnswer.size} x ${optimizedAnswer.NumberOfSeatsNeeded}`);
    console.log(`Total = PHP ${optimizedAnswer.TotalCost}`);

    rl.close();
});

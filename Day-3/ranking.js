


function newRankings(winnerData, newWinner) {

    const newWinners = [];
    let temp = [];
    winnerData = winnerData.flat();
    winnerData.push(newWinner);
    winnerData.sort((a, b) => a.attempts - b.attempts);

    temp[0] = winnerData[0];

    for (let i = 1; i < winnerData.length; i++) {
        if (winnerData[i].attempts === winnerData[i - 1].attempts) {
            temp.push(winnerData[i]);
        } else {
            newWinners.push(temp);
            temp = [];
            temp.push(winnerData[i]);
        }
    }
    newWinners.push(temp);
    return newWinners;
}




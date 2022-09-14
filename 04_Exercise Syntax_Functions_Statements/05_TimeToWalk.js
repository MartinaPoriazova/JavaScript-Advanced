function timeToWalk(stepsCount, footprintLength, speed) {
    let metersToWalk = stepsCount * footprintLength;
    let kmToWalk = metersToWalk / 1000;

    let timeForBreak = Math.floor(metersToWalk / 500) * 60;
    let timeForWalk = Math.round(((kmToWalk / speed) * 3600) + timeForBreak);
    

    let hours = Math.floor(timeForWalk / 3600).toString();
    let mins = Math.floor(timeForWalk / 60).toString();
    let secs = (timeForWalk % 60).toString();

    console.log(`${hours.padStart(2, '0')}:${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
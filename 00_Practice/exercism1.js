const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i];
  }
  console.log(`Total birds =>${totalBirds}`);
}

function birdsInWeek(birdsPerDay, week) {
    let weekend = (7*week)-1;
    let totalBirdsPerWeek = 0;
    for (let i = (weekend-7)+1; i <= weekend ; i++) {
      totalBirdsPerWeek += birdsPerDay[i];
    }
    console.log(`Total birds per Week=>${totalBirdsPerWeek}`);
}
function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length ; i+=2) {
      birdsPerDay[i] = birdsPerDay[i] +1;
    }
    console.log(`New Array=>${birdsPerDay}`);
}
totalBirdCount(birdsPerDay)
birdsInWeek(birdsPerDay,2)
fixBirdCountLog(birdsPerDay)



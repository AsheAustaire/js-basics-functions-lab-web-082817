// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  x =(42 - distance);
  return Math.abs(x);
}

function distanceFromHqInFeet(distance) {
  x = distanceFromHqInBlocks(distance);
  const feet = x * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination) {
 totalBlocks = start - destination;
 totalInFeet = totalBlocks * 264;
 return Math.abs(totalInFeet);
}

function calculatesFarePrice(start, destination) {

  const distFeet = distanceTravelledInFeet(start,destination);

  if (distFeet < 400) {return 0} else{
    if (distFeet > 400 && distFeet < 2000) {return distFeet * .02} else{
      if (distFeet > 2000 && distFeet < 2500) {return 25} else {
        if (distFeet > 2500) {return 'cannot travel that far'}
      }
    }
  }

}

const wakeDog = function (dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

const leashDog = function (dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

const walkToPark = function (dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function (dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function (dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function (dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  const newroutine = []
  for (let i = 0; i < routine.length; i++) {
    const exer = routine[i]
    const exercise = exer(dogName, dogBreed)
    newroutine.push(exercise)
  }
   return newroutine
}



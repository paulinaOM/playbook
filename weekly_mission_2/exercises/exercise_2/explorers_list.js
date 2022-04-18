const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

function getNames (){
    console.log("-Explorer names: ");
    explorers.forEach(explorer => {
        console.log(explorer.name);
    })
}


function getStacks (){
    console.log("-Explorer stacks: ")
    explorers.forEach(explorer => {
        console.log(explorer.stack);
    })
}

function getNewStackList(){
    const stackList = explorers.map((explorer)=> explorer.stack)
    console.log("-New stack list", stackList);
}

function getExplorersJS(){
    const newList = explorers.filter((explorer) =>explorer.stack.includes('js'))
    console.log("-Explorers with JS",newList);
}

function getExplorerCDMX(){
    const explorer_cdmx = explorers.find((explorer) =>explorer.city == "CDMX")
    console.log("-First explorer from CDMX", explorer_cdmx);
}

function getExercisesCompleted(){
    const exercises_completed = explorers.reduce((acc, explorer) =>acc + explorer.exercises_completed, 0)
    console.log("-Exercises completed", exercises_completed);
}

function someFrontendFinished(){
    const frontend_finished = explorers.some((explorer) => explorer.missions.frontend.isFinished == true)
    console.log("Alguno de los explorers tiene la misión frontend finalizada: " + frontend_finished)
}

function everyOnboardingFinished(){
    const onboarding_finished = explorers.every((explorer) => explorer.missions.onboarding.isFinished == true)
    console.log("Todos los explorers tienen la misión onboarding finalizada: " + onboarding_finished)
}

getNames();
getStacks();
getNewStackList();
getExplorersJS()
getExplorerCDMX();
getExercisesCompleted();
someFrontendFinished();
everyOnboardingFinished();
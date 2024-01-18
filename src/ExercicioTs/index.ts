function spaceshipExercicio(name: string, pilot: string) {
    const spaceship = {
        nome: name,
        piloto: pilot,
        inMission: false,
        crewLimit: []
    };

    return spaceship;
}

console.log(spaceshipExercicio('magno', 'juliana'));
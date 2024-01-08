const spaceships = {
    name: 'Hello,Word!!!',
    speed:0
}

function accelerates(spaceships: { name: string; speed: number },speed: number){
spaceships.speed = speed
}

accelerate(spaceships,50)
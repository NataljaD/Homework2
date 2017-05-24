class Fighter {
    constructor(name, power, health=100) {
        this._name = name;
        this._power= power;
        this._health=health;
    }

    get name() {
        return this._name;
    }

    get power() {
        return this._power;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health=value;
    }

    setDamage(damage) {
        if(this.health - damage<=0)
            this.health = 0;
        else
            this.health = this.health - damage;
        console.log(`Health ${this.name}: ${this.health}`);
    }

    hit(enemy, point) {
        let damage=point*this.power;
        enemy.setDamage(damage);
    }

}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, 2*point)
    }
}

let fight = (fighter, improvedFighter, ...point) => {
    var order=0;
    if(point.length==0){
        console.log(`May be ${fighter.name} and ${improvedFighter.name} are friends...`);
        return;
    }

    for(let p of point) {
        if(fighter.health<=0) {
            console.log(`Won ${improvedFighter.name}!`);
            return;
        }

        if(improvedFighter.health<=0) {
            console.log(`Won ${fighter.name}!`);
            return;
        }

        if(order%2)
            fighter.hit(improvedFighter, p);
        else
            improvedFighter.doubleHit(fighter, p);

        order++;
    }
    console.log(`${fighter.name} and ${improvedFighter.name} survived`);
}


var fighter1 =new ImprovedFighter('Biba', 4 ,100);

var fighter2 =new Fighter('Boba', 8 ,100);

fight(fighter2, fighter1, 1, 1, 2, 1, 5);

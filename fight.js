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

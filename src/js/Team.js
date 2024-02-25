import Character from "./Character";

export default class Team {
    constructor() {
        this.members = new Set([
          new Character('Лучник', 'Bowman', 50, 1, 40, 10),
          new Character('Фехтовальщик', 'Swordsman', 50, 1, 40, 10),
          new Character('Волшебник', 'Magician', 50, 1, 40, 10),
          new Character('Демон', 'Daemon', 50, 1, 40, 10),
        ]);
      }

      [Symbol.iterator] = function() {
        const charList = Array.from(this.members);
        let current = 0;
        const last = charList.length - 1;
    
        return {
          next() {
            if (current <= last) {
              return { done: false, value: charList[current++] };
            }
            return { done: true };
          },
        };
      }
      
}





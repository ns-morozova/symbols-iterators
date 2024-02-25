import Character from "../Character";

test('Проверка класса Character', () => {
    const char = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
  
    expect(char.name).toBe('Лучник');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(50);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(40);
    expect(char.defence).toBe(10);

  });
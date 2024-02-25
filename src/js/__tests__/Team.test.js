import Team from "../Team";

test('Проверка класса Team', () => {
  const team = new Team();


  while (true) {
    let result = team.next();
    if (result.done) {
      expect(result.done).toBe(true);
      break;
    }
    expect(result.done).toBe(false);
    
  }
});

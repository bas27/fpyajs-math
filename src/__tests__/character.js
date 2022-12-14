import Character from '../js/character';

describe('Создание персонажа', () => {
  test('проверка характеристик', () => {
    try {
      const recived = new Character('Nik', 'Daemon', 25, 25, 100, 1);
      const expected = {
        name: 'Nik',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка длины имени менее 2', () => {
    try {
      const recived = new Character('Q', 'Daemon', 25, 25, 100, 1);
      const expected = {
        name: 'Q',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка длины имени более 10', () => {
    try {
      const recived = new Character('Qwertyasdfg', 'Daemon', 25, 25, 100, 1);
      const expected = {
        name: 'Qwertyasdfg',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка типа поля name', () => {
    try {
      const recived = new Character(456, 'Daemon', 25, 25, 100, 1);
      const expected = {
        name: 456,
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: установите строковое значение полю name').toContain(Error.message);
    }
  });

  test('проверка типа персонажа', () => {
    try {
      const recived = new Character('Tady', 'Boy', 25, 25, 100, 1);
      const expected = {
        name: 'Tady',
        type: 'Boy',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (e) {
      expect('Ошибка: тип персонажа не соответствует заданному').toContain(e.message);
    }
  });
});

test('Проверяем levelUp', () => {
  const king = new Character('King', 'Swordsman', 15, 25, 15, 1);
  const expected = {
    name: 'King',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 18,
    defence: 30,
  };
  expect(king.levelUp()).toEqual(expected);
});

test('Проверяем levelUp', () => {
  try {
    const king = new Character('King', 'Swordsman', 15, 25, 0, 1);
    const expected = {
      name: 'King',
      type: 'Swordsman',
      health: 0,
      level: 2,
      attack: 18,
      defence: 30,
    };
    expect(king.levelUp()).toEqual(expected);
  } catch (e) {
    expect('Ошибка: нельзя повысить левел умершего').toContain(e.message);
  }
});

test('Проверяем damage', () => {
  const king = new Character('King', 'Swordsman', 15, 25, 100, 1);
  const expected = {
    name: 'King',
    type: 'Swordsman',
    health: 85,
    level: 1,
    attack: 15,
    defence: 25,
  };
  expect(king.damage(20)).toEqual(expected);
});

test('Проверяем damage', () => {
  try {
    const king = new Character('King', 'Swordsman', 15, 25, 0, 1);
    const expected = {
      name: 'King',
      type: 'Swordsman',
      health: 0,
      level: 2,
      attack: 18,
      defence: 30,
    };
    expect(king.damage(20)).toEqual(expected);
  } catch (e) {
    expect('Ошибка: нельзя убить умершего').toContain(e.message);
  }
});

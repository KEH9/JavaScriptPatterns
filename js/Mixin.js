//------- simple mixin -------

// примесь
let sayHiMixin = {
  sayHi() {
    alert(`Привет, ${this.name}`);
  },
  sayBye() {
    alert(`Пока, ${this.name}`);
  }
};

// использование:
class User {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Васятка").sayHi(); // Привет, Вася!


//------- simple mixin END -------




//------- EventMixin -------

let eventMixin = {
  /**
   * Подписаться на событие, использование:
   * menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для этого события нет
    }

    // вызовем обработчики
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

// Создадим класс
class Menu {
  choose(eventName, value) {
    this.trigger(eventName, value);
  }
}
// Добавим примесь с методами для событий
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

let onSelect = function (value) {alert(`Выбранное значение: ${value}`)};
let onEntered = function (value) {alert(`Введенное значение: ${value}`)};

// Добавить обработчик, который будет вызван при событии "select":
menu.on("select", onSelect);
menu.on("entered", onEntered);

// Генерирует событие => обработчик выше запускается и выводит:
menu.choose("select", "123"); // Выбранное значение: 123
menu.choose("entered", "abc"); // Выбранное значение: 123

menu.choose("select", "456"); // Выбранное значение: 123

menu.off("select", onSelect);
menu.choose("select", "789"); // Выбранное значение: 123



//------- EventMixin END -------


export const questions = [
  {
    id: 1,
    type: 'question',
    name: 'gender',
    text: 'Ваш пол:',
    answers: ['Мужчина', 'Женщина']
  },
  {
    id: 2,
    type: 'question',
    name: 'age',
    text: 'Укажите ваш возраст:',
    answers: ['До 18', 'От 18 до 28', 'от 29 до 35', 'от 36']
  },
  {
    id: 3,
    type: 'question',
    name: 'unnecessary',
    text: 'Выберите лишнее:',
    answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']
  },
  {
    id: 4,
    type: 'question',
    name: 'return',
    text: 'Продолжите числовой ряд: 18  20  24  32',
    answers: ['62', '48', '74', '57', '60', '77']
  },
  {
    id: 5,
    type: 'color',
    text: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    name: 'color-1',
    answers: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B2AC'
    ]
  },
  {
    id: 6,
    type: 'color',
    text: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    name: 'color-2',
    answers: [
      '#A8A8A8',
      '#46B2AC',
      '#A95403',
      '#00A701',
      '#000000',
      '#F60100',
      '#850068',
      '#FDFF19',
      '#0000A9'
    ]
  },
  {
    id: 7,
    type: 'question',
    name: 'city',
    text: 'Какой из городов лишний?',
    answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
  },
  {
    id: 8,
    type: 'picture',
    pictureUrl: '../../../src/assets/images/Test/questions/figure.jpg',
    name: 'figure',
    text: 'Выберите правильную фигуру из четырёх пронумерованных.',
    answers: ['1', '2', '3', '4']
  },
  {
    id: 9,
    type: 'question',
    name: 'important',
    text: 'Вам привычнее и важнее:',
    answers: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт'
    ]
  },
  {
    id: 10,
    type: 'question',
    pictureUrl: '../../../src/assets/images/Test/questions/rectangle.jpg',
    name: 'rectangle',
    text: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    answers: ['Оно остроконечное', 'Оно устойчивое', 'Оно находится в состоянии равновесия']
  },
  {
    id: 11,
    type: 'picture',
    pictureUrl: '../../../src/assets/images/Test/questions/star.jpg',
    name: 'figure',
    text: 'Вставьте подходящее число',
    answers: ['34', '36', '53', '44', '66', '42']
  }
]

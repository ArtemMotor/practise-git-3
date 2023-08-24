/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict'

// Код возьмите из предыдущего домашнего задания

// Первая часть задания была в том, чтобы поместить готовый код в функции. Чтобы он работал нужно не забывать вызывать функции

let numberOfFilms // объявили чтобы переменная была глобальной, и получала своё значение из функции start. Это значение будет записано в наш объект. Если бы мы объявили переменную внутри функции, то у объекта не было бы доступа к ней

// Запрашивает сколько фильмов посмотрел юзер. Встроена проверка, если пользователь вводит не число
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    alert('Введите числовое значение!')
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}

start() // не забываем вызывать функцию

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

// Эта функция записывает в объект 2 последних фильма, которые посмотрел user. Тоже есть проверка
function rememberUserFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm = prompt(
      'Один из последних просмотренных фильмов?',
      'terminator'
    )
    let markLastFilm = prompt('На сколько оцените его?', 5.6)
    if (
      lastFilm !== null &&
      markLastFilm !== null &&
      lastFilm !== '' &&
      markLastFilm !== '' &&
      lastFilm.length < 50
    ) {
      personalMovieDB.movies[lastFilm] = +markLastFilm
    } else {
      console.log('error')
      i--
    }
  }
}

// rememberUserFilms()

// Эта функция определяет уровень насмотренности юзера и сообщает его уровень. Если в personalMovieDB.count не число, то будет сообщение об ошибке
function detectedNumBerUserFilms() {
  if (
    personalMovieDB.count == null ||
    isNaN(personalMovieDB.count) ||
    personalMovieDB.count == ''
  ) {
    alert('Произошла ошибка')
  } else if (personalMovieDB.count < 10) {
    alert(
      `Просмотрено довольно мало фильмов: ${personalMovieDB.count} фильма просмотрено`
    )
  } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    alert(
      `Вы классический зритель: ${personalMovieDB.count} фильма просмотрено`
    )
  } else if (personalMovieDB.count > 30) {
    alert(`Вы киноман: просмотрено ${personalMovieDB.count} фильмов`)
  }
}

// detectedNumBerUserFilms()

// Тут начинаем выполнять дз
function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB)
  }
}
// showMyDB()

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
  let count = 1
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Какой ваш любимый жанр номер ${count}?`
    )
    count += 1
  }
}

writeYourGenres()

//1. Напишите программу, которая запрашивает у пользователя последовательно день его рождения, месяц и год;
// Функция для запроса даты рождения
function askForBirthDate() {
	const day = prompt("Введите день вашего рождения: ")
	const month = prompt("Введите месяц вашего рождения: ")
	const year = prompt("Введите год вашего рождения: ")
	return new Date(year, month - 1, day) // Создаем объект даты
}
// Запрос даты рождения и вывод результата
const userBirthDate = askForBirthDate()
console.log(`Ваша дата рождения: ${userBirthDate.toDateString()}`)

//2. Напишите функцию, которая определяет какому дню недели соответствует эта дата?
function getDayOfWeek(date) {
	const day = date.getDate() // Получаем день месяца
	const month = date.getMonth() + 1 // Переводим месяц в число от 1 до 12
	const year = date.getFullYear() // Получаем год
	const dayOfWeek = new Date(year, month - 1, day).getDay() // Определяем день недели
	return dayOfWeek
}
// Пример использования функции
const date = new Date("2024-08-06") // Задаем дату
console.log(`Сегодня ${date.toDateString()} - это ${getDayOfWeek(date)}`)

//3. Напишите функцию, которая определяет - високосный это был год, или нет?
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
console.log(isLeapYear(2020)) // Выведет true, так как 2020 год високосный
console.log(isLeapYear(2000)) // Выведет true, так как 2000 год високосный
console.log(isLeapYear(2100)) // Выведет false, так как 2100 год не високосный

//4. Напишите функцию, которая определяет сколько сейчас лет пользователю
function calculateAge(day, month, year) {
	const birthDate = new Date(year, month - 1, day) // Преобразуем введенные данные в объект даты
	const now = new Date()
	const years = now.getFullYear() - birthDate.getFullYear()
	if (
		now.getMonth() < birthDate.getMonth() ||
		(now.getMonth() === birthDate.getMonth() &&
			now.getDate() < birthDate.getDate())
	) {
		years--
	}
	return years
}
// Пример использования функции
const day = prompt("Введите день вашего рождения")
const month = prompt("Введите месяц вашего рождения")
const year = prompt("Введите год вашего рождения")
const age = calculateAge(day, month, year)
console.log(`Ваш возраст: ${age}`)

//5. Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг, где цифры прорисованы звёздочками (*), как на электронном табло.
function formatDate(day, month, year) {
	const formattedDate = `${day} ${month} ${year}`
	return formattedDate.replace(/\d/g, "*")
}
// Пример использования функции
const day = prompt("Введите день вашего рождения")
const month = prompt("Введите месяц вашего рождения")
const year = prompt("Введите год вашего рождения")
const formattedDate = formatDate(day, month, year)
console.log(formattedDate)

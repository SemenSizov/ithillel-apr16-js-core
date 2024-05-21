const measurmentValue = 0
const defaultTemp = 14
const temp = measurmentValue || defaultTemp
const temp2 = measurmentValue ?? defaultTemp
console.log(temp)
console.log(temp2)


const user = {
	email: 'useremailrandom@emal.com',
	isMarried: false,
	visitsCount: 0
};

const isUserMarried = user.isMarried ?? 'Невідомо';
const userVisitsCount = user.visitsCount ?? 'Невідомо';

console.log(isUserMarried); // false
console.log(userVisitsCount); // 0
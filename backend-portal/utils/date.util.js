function startOfWeek(date) {
	let forDate = new Date(date);
	forDate.setUTCHours(0, 0, 0, 0);
	forDate.setDate(forDate.getDate() - forDate.getDay());
	return forDate;
}

function endOfWeek(date) {
	let forDate = new Date(date);
	forDate.setUTCHours(23, 59, 59, 99);
	forDate.setDate(forDate.getDate() - forDate.getDay() + 6);
	return forDate;
}

function startOfMonth(date) {
	let forDate = new Date(date);
	forDate.setUTCHours(0, 0, 0, 0);
	forDate.setDate(1);
	forDate.setDate(forDate.getDate() - forDate.getDay());
	return forDate;
}

function endOfMonth(date) {
	let forDate = new Date(date);
	forDate.setUTCHours(23, 59, 59, 99);
	forDate.setDate(1);
	forDate.setMonth(forDate.getMonth() + 1);
	forDate.setDate(forDate.getDate() - 1);
	return forDate;
}


module.exports = {
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth
}
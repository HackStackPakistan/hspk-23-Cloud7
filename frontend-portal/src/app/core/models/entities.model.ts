export interface User {
	fullName: string,
	email: string,
	role: string;
}

export interface Log {
	userQuery: object;
	response: object;
	user: User;
}
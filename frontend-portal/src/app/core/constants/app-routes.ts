export class AppRoutes {
	static readonly Home = {
		Main: '',
		get Exact() { return '/' + this.Main; }
	};
}
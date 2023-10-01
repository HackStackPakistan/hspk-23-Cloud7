(
	function(window) {
		window.__env = {
			...(window.__env || {}),
			// ENVs ->
			// example -> key: Value,
			api: 'http://localhost:3000'

		}
	}(this)
)
let allow = (roles) => {
	return (req, res, next) => {
		let isMatch = roles.includes(req.user?.role);
		console.log("GUARD: ▼", req.user?.role, " | ▲", roles, " - ", isMatch);
		if (isMatch) return next();
		else return res.status(403).json({ status: 403, data: "You are not allowed to access this resource !" });
	}
}

module.exports = allow;
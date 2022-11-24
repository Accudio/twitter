let data = {
	username: "accudio", // No leading @ here
	homeLabel: "alistairshepherd.uk",
	homeUrl: "https://alistairshepherd.uk/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;

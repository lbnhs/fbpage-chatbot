module.exports = {
	Check(currentVersion){
		const fetch = require('node-fetch');
		// These where magic happends...
			fetch("https://raw.githubusercontent.com/lbnhs/fbpage-chatbot/master/package.json")
				.then(res => res.json())
				.then(json => {
					if(json.data[0].version != currentVersion){
						getLogger().warning("[Update Checker] A newest version of fbpage-chatbot has been released.");
						getLogger().warning("[Update Checker] Current Version: " + currentVersion);
						getLogger().warning("[Update Checker] Newest Version: " + json.data[0].version);
						getLogger().warning("[Update Checker] Please update immediately for patch updates.");
					} else {
						getLogger().notice("[Update Checker] No updates found. Enjoy!");
					}
				});
	}
};
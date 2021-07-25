global.fetch = require('node-fetch');

const secret = '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';

class GitHubSDK {
    constructor () {
        this.url = 'https://api.github.com';
    }

    options() {
        const options = {
            method: "GET",
            headers: {
              Accept: "application/vnd.github.v3+json",
              Authorization: `token ${secret}`,
            },
            body: JSON.stringify(),
        }

        return options;
    }
}

export default GitHubSDK;

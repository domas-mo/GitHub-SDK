global.fetch = require('node-fetch');

const secret = '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';

class GitHubSDK {
    constructor () {
        this.url = 'https://api.github.com';
    }

    async getUser(user) {
        try {
            const promise = await fetch(`https://api.github.com/users/${user}`, this.options);

            if(promise.ok) {
                const result = await promise.json();
                return result;
            } else {
                return Promise.reject(res);
            }
        } catch(err) {
            throw new Error('User does not exists'); 
        }
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

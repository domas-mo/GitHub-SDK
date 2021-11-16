global.fetch = require('node-fetch');
import { secret } from './secret';

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

    async getRepo(user) {
        try {
            const promise = await fetch(`https://api.github.com/users/${user}/repos`, this.options);

            if(promise.ok) {
                const result = await promise.json();
                return result;
            } else {
                return Promise.reject(res);
            }
        } catch(err) {
            throw new Error('Repo does not exists'); 
        }  
    }

    async getCommits(user, repo) {
        try {
            const promise = await fetch(`https://api.github.com/repos/${user}/${repo}/commits`, this.options);

            if(promise.ok) {
                const result = await promise.json();
                return result;
            } else {
                return Promise.reject(res);
            }
        } catch(err) {
            throw new Error('Commits does not exists'); 
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

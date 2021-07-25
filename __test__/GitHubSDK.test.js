global.fetch = require("node-fetch");
import GitHubSDK from '../src/GitHubSDK';

//USER

it('return user', async () => {
    const gh = new GitHubSDK();
    const user = 'domas-mo';

    const result = await gh.getUser(user);
    expect(result.login).toBe(user)
});

it('return user id', async () => {
    const gh = new GitHubSDK();
    const user = 'domas-mo';
    const id = 77193918;

    const result = await gh.getUser(user);
    expect(result.id).toBe(id);
});

it('throw error when user does not exists', async () => {
    expect.assertions(1);
    const user = '';
    const gh = new GitHubSDK();

    await expect(gh.getUser(user)).rejects.toThrow('User does not exists');
})

// REPO

it('return repo', async () => {
    expect.assertions(1);
    const gh = new GitHubSDK();
    const user = 'domas-mo';

    const result = await gh.getRepo(user);
    expect(Array.isArray(result)).toBeTruthy();
})

it('throw error when repo does not exists', async () => {
    expect.assertions(1);
    const gh = new GitHubSDK();
    const user = '';

    await expect(gh.getRepo(user)).rejects.toThrow('Repo does not exists');
}) 

// COMMITS 

it('return commits ', async() => {
    const gh = new GitHubSDK();
    const user = 'domas-mo';
    const repo = 'practice-js-basics-arrays';
    const result = await gh.getCommits(user, repo);

    expect(Array.isArray(result)).toBeTruthy();
});

it('throw error when commits does not exists', async () => {
    expect.assertions(1);
    const gh = new GitHubSDK();
    const user = 'domas-mo';
    const repo = ''

    await expect(gh.getCommits(user, repo)).rejects.toThrow('Commits does not exists');
}) 


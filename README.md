# GitHub-SDK

GitHub-SDK is a project where you can get some information about user from GitHub-API and testing. The project is built using Test Driven Development methodology. It is a development process in which software requirements and functionalities are firstly converted to test cases. Next step is to build an implementation that passess both software requirement and test case. After all there is a code refactoring. It is so called 'red-green-refactor' cycle.

In this project you can: 
- get information about user;
- get information about user's repositories;
- get information about your commits to repositories;

and then verify that everything is working correctly by using Jest.

**Main features**:
- JavaScript
- Jest
&nbsp;
 
## 💡 Technologies

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
&nbsp;
 
## 💿 Installation

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Having them installed, type into the terminal: `npm i` and then `npm test`.
&nbsp;

## 🤔 Solutions provided in the project

1. Example tests:
```
it('return user', async () => {
    const gh = new GitHubSDK();
    const user = 'domas-mo';

    const result = await gh.getUser(user);
    expect(result.login).toBe(user)
});
```

```
it('return user id', async () => {
    const gh = new GitHubSDK();
    const user = 'domas-mo';
    const id = 77193918;

    const result = await gh.getUser(user);
    expect(result.id).toBe(id);
});
```
&nbsp;

## 🙋‍♂️ Feel free to contact me

Hi there! I am Domink! I am looking for my first professional experience in IT area in Warsaw.

Find me on...

<p align="center">
	<a href="https://github.com/domas-mo"><img alt="github" width="10%" style="padding:5px" src="https://img.icons8.com/clouds/100/000000/github.png"/></a>
	<a href="https://www.linkedin.com/in/dominik-mo/"><img alt="linkedin" width="10%" style="padding:5px" src="https://img.icons8.com/clouds/100/000000/linkedin.png"/></a>
    <a href="mailto:dominik.mozdzen1@gmail.com"><img alt="linkedin" width="10%" style="padding:5px" src="https://img.icons8.com/clouds/100/000000/email.png"/></a>
</p>
&nbsp;

## 👏 Thanks / Special thanks / Credits

To my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.


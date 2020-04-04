![Deploy to GitHub Pages](https://github.com/dhbalaji/reactStaticPageScaffolder/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

## React Static Pages Template

This project customizes create-react-app scaffold and makes it better for building production ready static page apps in react.

We have added support for 

* SCSS
* Out of the box support for `env` for variables
* Prettier for code style
* Dark mode styling with CSS Media queries

> This repo is always up to date with latest npm packages.

I know its not convincing yet, `One last thing `. Merge/push the code to master, github actions will automatically deploy to github pages. No manual building and deployment tasks. Lets `Automation` take care of it.

## To get started

1. `git clone git@github.com:dhbalaji/reactStaticPagesWithGithubActions.git`
2. `cd reactStaticPagesWithGithubActions`
3. `npm install`
4. `npm start`

If you are on github watching this, just click on `use this template` button. The code will be copied to a new repository and you can use the code as a boilerplate to get started.

![](./screenshots/github_use_template.png)

Visit [localhost](http://localhost:3000) on your browser. If you are using `Webstorm IDE`. The workspace would have been imported automatically and the localhost runs on `https`. Use <https://localhost:3000> to see the output.

Your localhost should show a `dynamic digital clock` which ticks every second.The output should look as follows.

> The light/dark mode is auto detected from the client OS through CSS Media queries.

### On light mode, the output would be similar to the below screenshot.

![](screenshots/light-mode-detection-css-media-query.PNG)

### On dark mode, the output would be similar to the below screenshot.

![](screenshots/dark-mode-detection-css-media-query.PNG)

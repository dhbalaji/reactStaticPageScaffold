![Deploy to GitHub Pages](https://github.com/dhbalaji/github_actions_with_react/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

## dhbalaji react static pages scaffolder

Merge/push the code to master, github actions will automatically deploy and the output can be seen as [deployed static pages](https://dhbalaji.github.io/githubActionsReact/).

## Steps involved in creating this project

1. Create react app using npm instead of yarn. Yarn does not work with github actions because yarn does not create `package-lock.json`.

    ```shell script
       npx create-react-app my-app --use-npm
    ```

    If this step did not work. It could be because you had a global install of `create-react-app`. Uninstall it and try again. `npx` will ensure you always install the latest of `create-react-app`, is it not convincing?

    > By default the `my-app` will be a `git` repository.

2. cd into `my-app` && do `npm start`

    ```shell script
       cd my-app && npm start
    ```

    > Things to remember. `public/index.html` & `src/index.js` are most important files in this setup. Put JS & CSS files inside `src` folder.

3. I like to code in `scss` so we need to add `node-sass`.

    ```shell script
     npm install node-sass --save
    ```

4. I like prettier because I don't have to worry about code style. I would prefer to add git commit hook too so I am sure all changed files are made pretty.

    ```shell script
     npm install --save-dev --save-exact prettier
     npm i pretty-quick husky --save-dev
    ```

    add the below script to `package.json`

    ```json
     "husky": {
        "hooks": {
          "pre-commit": "pretty-quick --staged"
        }
     }
    ```

5. Run prettier on your current code.

    - Add a tasks under scripts in `package.json`
    
        ```json
        "pretty-everything": "prettier --write .",
        "pretty-check": "prettier --check ."
        ```
    - Run the task `npm run pretty-everything`. This is just one time activity.

    > TODO: Webstorm auto save + pretty wont work
6. Lets analyze the final bundles

    ```shell script
       npm install --save-dev source-map-explorer
    ```

    To analyze
    
    ```shell script
     npm run build && npm run analyze
    ```
7. To use HTTPS

    windows `set HTTPS=true&&npm start`
    
    linux `HTTPS=true npm start`
    
    > I use webstorm so I had set env variable in run configurations.
 

 To be continued , to add [env vars](https://create-react-app.dev/docs/adding-custom-environment-variables)
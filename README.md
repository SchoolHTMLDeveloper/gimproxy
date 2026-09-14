<div align="center">
    <h1>blooket hacks</h1>
    <h3>blooket hacks for a chromebook without extension or devtools access!</h3>
    <br>
    <h2>usage</h2>
</div>

1. Install [Bun](https://bun.sh) (node also supported).
2. Clone the repository from Git.
3. Install dependencies: `bun i`.
4. Run the program: `bun .`.
5. Try it! `http://localhost:4460`

<br>
<h2 align="center">setup "for dummies" on school computers</h2>

1. create a Github account
2. navigate to this repository
3. click the big green "Code" button, select the "Codespaces" tab, and click "Create codespace on master"
4. it should open a new tab (give it a second to load)
5. in the terminal (where it says `/workspaces/... (master) $`), enter the following commands in order & wait for each one to finish:
   1. `curl -fsSL https://bun.sh/install | bash`
   2. `source /home/codespace/.bashrc`
   3. `bun i`
   4. `bun start`
6. go to the ports tab (at the top of the terminal area)
7. if you want to also let your friends use this:
   1. right click the text that says "4460"
   2. hover over "port visibility"
   3. set it to public
8. now, right click the text that says "4460" and click "open in browser"
9. click "continue"
10. enjoy!

> [!TIP]
> press the \ key to toggle the cheat menu

<br>
<h2 align="center">logging in to blooket</h2>

you can go to the `/login` page to login to blooket.

you can see everything that is done with your email/password in [this file](./src/routes/login.html) & [this file](./src/routes/login.js) - they are only sent to blooket.

> [!CAUTION]
> it is possible for someone running this program to modify their program to save your login. only login on websites you trust. if you run this, your password is 100% safe, but a public hosted version may not be.

<br>
<h2 align="center">function</h2>

this "client" embeds cheat scripts in the site, allowing you to use them anywhere, even on a Chromebook! this allows for cheating during class.

<br>
<h5 align="center">made with ❤️</h5>

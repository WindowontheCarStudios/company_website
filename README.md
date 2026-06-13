# Window on the Car Studios website

Static website for Window on the Car Studios, designed for GitHub Pages.

## Files

- `index.html` — main page
- `styles.css` — site design
- `script.js` — game data and small interactions
- `404.html` — custom error page
- `assets/favicon.svg` — browser icon
- `.nojekyll` — tells GitHub Pages to serve the files as plain static files
- `CNAME.example` — example custom domain file

## Update games

Open `script.js` and edit the `games` array. Each game card has:

```js
{
  title: "Game title",
  url: "https://example.itch.io/game",
  image: "https://example.com/image.png",
  genre: "Platformer",
  platform: "HTML5",
  type: "Play in browser",
  description: "Short description.",
  tags: ["Tag", "Tag", "Tag"]
}
```

## Publish on GitHub Pages

1. Create a new GitHub repository. A good name would be `window-on-the-car-site`.
2. Upload every file in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`, then save.
6. Wait for GitHub Pages to publish the site.

## Custom domain warning

`window_on_the_car.com` has underscores. Underscores are not valid for normal website hostnames, and GitHub Pages/custom HTTPS is likely to fail with that name.

Use a domain like:

- `window-on-the-car.com`
- `windowonthecar.com`

After you buy or confirm a valid domain:

1. Rename `CNAME.example` to `CNAME`.
2. Replace the contents with your real domain.
3. Commit and push the file.
4. In GitHub, go to **Settings → Pages → Custom domain** and enter the same domain.
5. At your DNS provider, add GitHub Pages records:
   - Apex/root domain: `A` records to GitHub Pages IPs.
   - `www`: `CNAME` to your GitHub Pages default domain, like `yourusername.github.io`.
6. Enable **Enforce HTTPS** after GitHub finishes checking the domain.

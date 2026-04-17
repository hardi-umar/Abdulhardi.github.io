# Abdul Hardi Umar Portfolio

Static cybersecurity portfolio site prepared for `GitHub Pages` with `abdulhardi.com` as the custom domain.

## Files

- `index.html` contains the content structure for the one-page portfolio.
- `styles.css` contains the full visual design and responsive layout.
- `script.js` adds the mobile menu, scroll-reveal animation, and active-nav highlighting.
- `CNAME` tells GitHub Pages to use `abdulhardi.com`.
- `.nojekyll` avoids Jekyll processing on GitHub Pages.

## Publish on GitHub Pages

1. Create a GitHub repository named `<your-github-username>.github.io`.
2. Copy these files into that repository.
3. Commit and push to the default branch.
4. In GitHub repository settings, open `Pages` and confirm deployment from the default branch root.
5. Wait for the `.github.io` URL to go live before pointing the custom domain.

## Connect `abdulhardi.com`

At your domain registrar, add the records GitHub Pages requires:

- `A` record to `185.199.108.153`
- `A` record to `185.199.109.153`
- `A` record to `185.199.110.153`
- `A` record to `185.199.111.153`
- `CNAME` record for `www` pointing to `<your-github-username>.github.io`

Then in GitHub Pages settings:

1. Set the custom domain to `abdulhardi.com`.
2. Enable HTTPS after DNS finishes propagating.

## Recommended next edits

- Replace the placeholder email address if you use a different inbox.
- Add your real resume file and update the resume button.
- Replace the placeholder project cards with real case studies and outcomes.
- Add a profile image if you want the hero section to feel more personal.

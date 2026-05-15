# Website Asset Organization

This folder contains the local website assets copied from the Joy Ogaya project media folder.

The website uses relative paths only, so it works when opening `index.html` directly or through VS Code Live Server.

Organization:

- `images/<property-name>/main.*` contains property thumbnails, hero imagery, and video posters.
- `videos/<property-name>/*.mp4` contains deployable MP4 files used by the property video gallery.

Large videos should stay below common static-hosting file limits for smooth Vercel and GitHub Pages deployment.
Videos over GitHub's 100,000,000 byte file limit were not copied into this static site because they would block commits and deployment.

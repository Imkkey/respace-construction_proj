# ReSpace Construction

A responsive construction-business landing-page concept built with **HTML, CSS, and vanilla JavaScript**.

**Status: frontend prototype.** Both quote forms simulate a successful submission in the browser. They are not connected to a backend and do not send quote requests.

## What is included

- A service-business layout with a hero, service cards, project gallery, process, reviews, and contact sections
- Responsive layouts with mobile navigation
- Light and dark themes, with the selected theme saved in `localStorage`
- Smooth anchor navigation, scroll-reveal effects, and a back-to-top button
- Two quote-form interfaces with required fields and a simulated confirmation state

The business content is part of the presentation. This repository is a frontend concept, not evidence of a production launch or client results.

## Preview locally

Clone the repository and serve its directory with any static web server.

With Python 3 installed:

```sh
git clone https://github.com/Imkkey/respace-construction_proj.git
cd respace-construction_proj
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. There is no package installation or build step.

Google Fonts and Font Awesome are loaded from external services, so their fonts and icons need an internet connection.

## Project structure

- `index.html`: page structure, content, navigation, and forms
- `style.css`: layouts, components, responsive breakpoints, and theme styling
- `script.js`: menu, theme preference, scrolling, and simulated form interactions
- `*.png`: local page images

## Checks to try

- Resize between desktop and mobile widths and use the mobile menu.
- Switch themes, reload the page, and check that the preference persists.
- Follow section links and use the back-to-top button.
- Try both forms with empty and populated fields. The confirmation is a demo; no request is delivered.

Before using this for a real business, connect and test a form backend, replace or verify the business content and assets, and review accessibility and privacy requirements.

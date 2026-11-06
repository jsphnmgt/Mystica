# MYSTICA

A Studio Ghibli fan website for discovering films, exploring their stories, and watching trailers.

## About the project

MYSTICA is a passion project that celebrates Studio Ghibli's films through a visual, curated catalog. Visitors can browse movie posters, open individual film pages, read synopses and production details, and follow links to trailers.

The website uses static HTML, CSS, and JavaScript. Its content and media are stored in this repository, with no application backend, database, package installation, or build step.

## Features

- **Movie catalog:** Browse 21 films, including *My Neighbor Totoro*, *Spirited Away*, *Howl's Moving Castle*, and *The Boy and the Heron*.
- **Individual movie pages:** View a synopsis, Japanese title, director, producer, release date, genres, release status, and runtime.
- **Trailer links:** Open YouTube trailers from each film's trailer section.
- **Responsive design:** Layouts adapt to desktop, tablet, and mobile screens, with a hamburger menu on smaller screens.
- **Music controls:** Click the circular Totoro logo to play or pause the included background track. The playback preference is saved in `localStorage`; browsers may require another click before allowing playback on a new page.
- **About page:** Read the inspiration and purpose behind MYSTICA.
- **Question form:** Enter a name, email address, and question, with required-field and email validation, plus submit and reset buttons. Submissions use Formspree.
- **Social and contact links:** Find the creator's social profiles and email in the footer.
- **Print styles:** Dedicated CSS rules adjust the pages for printing.

## Technology used

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure, film details, forms, and audio |
| CSS3 | Layouts, visual styling, responsive breakpoints, and print styles |
| Vanilla JavaScript | Menu toggling, form validation, and music controls |
| Web Storage API (`localStorage`) | Remembering the music playback preference |
| Google Fonts | Convergence, Inter, Mulish, and Protest Strike typography |
| Formspree | External service for question form submissions |
| YouTube | External trailer videos |

## File structure

```text
Mystica/
|-- index.html              # Home page and movie catalog
|-- README.md               # Project documentation
|-- LICENSE                 # Copyright, reuse restrictions, and third-party notice
|-- pages/
|   |-- about.html          # Project background and inspiration
|   |-- question.html       # Question/contact form
|   `-- movies/             # 21 individual movie detail pages
`-- assets/
    |-- css/
    |   |-- styles.css          # Home and movie page styles
    |   `-- about_contact.css   # About and question page styles
    |-- js/
    |   `-- script.js           # Form validation, navigation, and audio controls
    |-- images/
    |   |-- backgrounds/        # Movie page background images
    |   |-- covers/             # Movie posters and cover images
    |   |-- trailers/           # Trailer preview images
    |   `-- shared/             # Logos, icons, decorative art, and site backgrounds
    `-- audio/
        `-- the-path-of-the-wind.mp3
```

## Run locally

### Requirements

- A modern web browser.
- Python 3 for the local server option, or a static-server extension such as VS Code Live Server.
- Git only if you want to clone the repository instead of downloading it.

### 1. Get the project

```sh
git clone https://github.com/jsphnmgt/Mystica.git
cd Mystica
```

If you already have the project, open a terminal in its root directory, where `index.html` is located.

### 2. Start a local server

On Windows with the Python launcher:

```sh
py -m http.server 8000 --bind 127.0.0.1
```

On macOS or Linux:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000** in your browser. Press `Ctrl+C` in the terminal to stop the server.

Alternatively, open the project folder in VS Code, install the Live Server extension, and choose **Open with Live Server** on `index.html`.

You can also open `index.html` directly for a quick preview. A local server provides a consistent origin for browser storage and page navigation.

No `npm install`, environment variables, or compilation are required. Google Fonts, YouTube trailers, Formspree submissions, and external social links need an internet connection.

## Author and credits

Created by **Maria Josephine Magat**, credited in the website as **CS-201**.

MYSTICA is an unofficial fan project and is not affiliated with or endorsed by Studio Ghibli. Film titles, characters, posters, screenshots, trailer imagery, music, and other third-party materials belong to their respective rights holders.

## License

**Copyright (c) 2026 Maria Josephine Magat. All rights reserved.**

MYSTICA is a personal portfolio project, not a reusable template. No license is granted to reuse, copy, modify, redistribute, or sell the original source code or documentation without prior written permission, except as permitted by applicable law or the hosting platform's terms. See [LICENSE](LICENSE) for the full notice. For permission requests, contact [jsphnmgt@gmail.com](mailto:jsphnmgt@gmail.com).

Third-party images, artwork, music, film content, fonts, and trademarks remain subject to their respective owners' rights and any applicable licenses. This project grants no rights to those materials.

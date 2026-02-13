# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

### Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that builds and deploys the `dist/` folder to GitHub Pages.

1. In GitHub: **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually via **Actions**) and it will publish.

#### Base path (important)

- **Project Pages** (URL like `https://<user>.github.io/exactly-as-seen/`)
	- Uses `npm run build:pages` which runs `vite build --base=/exactly-as-seen/`
- **Custom domain** (this repo has `public/CNAME`)
	- Use the default `npm run build` (base is `/`)
	- Configure the custom domain in **Settings → Pages**

### Pre-production vs Production (safer workflow)

This repo uses two branches for safety:

- **Production**: `main`
	- Automatically deploys to GitHub Pages via `.github/workflows/pages.yml`
- **Pre-production**: `pre`
	- Runs build + lint + tests and uploads a downloadable `dist/` artifact via `.github/workflows/pre.yml`
	- **Does not deploy**, so it cannot break your live site

Tip (recommended): In GitHub, protect the `main` branch (Settings → Branches) so only PRs can merge into `main`.

#### Local guardrails (optional)

This repo also includes a local Git hook that blocks direct pushes to `main` and prints a friendly message ("please push to `pre` and open a PR").

- It installs automatically on `npm i` via `postinstall`.
- It only affects your local machine (GitHub branch protection rules are still the source of truth).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

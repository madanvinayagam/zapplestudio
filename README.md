# Zapple Studio Website

A clean, responsive, and modern photography studio landing page built with HTML, Tailwind CSS (via CDN), and Vanilla JavaScript.

## 🚀 How to Run Locally

You can run a local development server to test the site exactly as it would behave in a production environment:

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run the development server command:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the address shown (usually `http://localhost:3000` or `http://localhost:5000`).

---

## ☁️ How to Deploy to Vercel

There are two main methods to deploy this website to Vercel:

### Method 1: Deploy with GitHub Integration (Recommended)
This is the easiest method and enables automatic deployments whenever you push changes to Git.

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New** > **Project**.
4. Import your repository.
5. Vercel will automatically detect that this is a static project. You do not need to configure any Build/Output settings.
6. Click **Deploy**.

### Method 2: Deploy via Vercel CLI
If you want to deploy directly from your local terminal:

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Run the deployment command from the project root:
   ```bash
   vercel
   ```
4. Follow the command prompts to set up and deploy the project.
5. To deploy to production, run:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Project Configuration (`vercel.json`)

The project contains a [vercel.json](vercel.json) file that configures:
- **Clean URLs**: Access HTML pages without their `.html` extensions (e.g. `/about` instead of `/about.html`).
- **Aggressive Caching**: Static photography assets under the `/assets/` directory are cached for 1 year in the browser for optimal page load speed.
- **Security Headers**: Includes standard headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Strict-Transport-Security` to keep the site secure.

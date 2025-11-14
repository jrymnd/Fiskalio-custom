## About this fork

This is a personal fork of [Fiskalio](https://github.com/marinactonci/Fiskalio), customized for my self-hosted setup.

Key differences from the original:

- 🧩 **Dockerized deployment**  
  - Added `Dockerfile` and `docker-compose.yml` for running Fiskalio in a container on my home server.
  - Exposes the app on port `3000` (e.g. `http://SERVER_IP:3000`).

- 💵 **USD currency formatting**  
  - All amounts are formatted as US Dollar using `Intl.NumberFormat`.
  - UI updated from `€` to `$` and euro icons replaced with dollar icons.

- 🧪 **Local custom tweaks**  
  - Minor UI text changes (e.g. app title, labels).
  - Safer date handling in `BillInstanceCard` to avoid `Invalid time value` errors.

  ## Run with Docker

1. Clone this repo and create a `.env.local` file in the project root with your Convex + Clerk settings.
2. Build and run with Docker:

   ```bash
   docker-compose build
   docker-compose up -d

> **Note:** This fork is primarily for my own use and experimentation.  
> You’ll need your own Convex and Clerk accounts and a `.env.local` file with the appropriate keys to run it.
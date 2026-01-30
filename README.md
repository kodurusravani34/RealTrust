# RealTrust  Agency Portfolio & Admin

A full-stack agency portfolio and admin system.

This repository contains a React + Vite frontend and a Node.js + Express backend (MongoDB) used to showcase projects, manage clients, collect leads, and operate an admin dashboard.

## Key features
- Responsive landing page with Projects, Testimonials, and contact form
- Admin dashboard to add/manage Projects, Clients, Contacts, and Subscribers
- Image uploads for projects (handled via server-side upload)
- Newsletter subscription and contact form backed by the API

## Tech stack
- Frontend: React, Vite, Tailwind CSS, Axios, React Router
- Backend: Node.js, Express, MongoDB, Mongoose, Multer

## Quick start
1. Clone the repo:

```bash
git clone <path-to-this-repo>
cd <repo-root>
```

2. Backend

```bash
cd Backend
npm install
# create .env with MONGO_URI and PORT (example .env.example may be present)
npm run dev   # starts server (e.g. http://localhost:5000)
```

3. Frontend

```bash
cd ../Frontend
npm install
npm run dev   # starts Vite dev server (e.g. http://localhost:5173)
```

4. Build for production

```bash
# Frontend
cd Frontend
npm run build

# Backend - deploy according to your hosting (e.g., Render, Heroku, Docker)
```

## Environment
- Provide a MongoDB connection string in `Backend/.env` as `MONGO_URI`.
- Add any cloudinary or storage keys to `Backend/config` if used.

## Project layout (high level)
- `Backend/`  server code, routes, controllers, models, uploads
- `Frontend/`  React app with `src/components` and `src/pages`

## Notes
- Images and some text may be embedded inside `Frontend/public` or `src/assets` (SVGs and images).
- If you plan to push this repository to a public remote, remove any sensitive values from `.env` files.

## Contributing
- Create a feature branch, make changes, and open a PR against the main branch.

## License & Contact
This project is provided as-is. For questions or assistance, open an issue or contact the maintainer.

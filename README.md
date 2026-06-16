# Yash Majithiya — Personal Website

MERN stack personal portfolio. Frontend on Vercel, backend on Railway.

## Project Structure

```
personal-website/
├── client/      # React + Vite + Tailwind
└── server/      # Node.js + Express + MongoDB
```

## Local Development

### 1. Start the backend

```bash
cd server
npm install
cp .env.example .env        # fill in your MongoDB URI
npm run dev                 # runs on http://localhost:5000
```

### 2. Start the frontend

```bash
cd client
npm install
npm run dev                 # runs on http://localhost:5173
```

The Vite dev server proxies `/api` requests to `localhost:5000` automatically.

---

## Deployment

### Backend → Railway

1. Create a free account at [railway.app](https://railway.app)
2. New Project → Deploy from GitHub repo → select `personal-website`
3. Set **Root Directory** to `server`
4. Add environment variables in Railway dashboard:
   - `MONGODB_URI` — your MongoDB Atlas connection string
   - `CLIENT_URL` — your Vercel frontend URL (add after Step 2 below)
5. Railway auto-detects `npm start` and gives you a public URL like `https://xxx.up.railway.app`

### Frontend → Vercel

1. Create a free account at [vercel.com](https://vercel.com)
2. New Project → Import GitHub repo → select `personal-website`
3. Set **Root Directory** to `client`
4. Add environment variable in Vercel dashboard:
   - `VITE_API_URL` = `https://xxx.up.railway.app/api`  ← your Railway URL
5. Deploy — Vercel gives you a public URL like `https://xxx.vercel.app`
6. Go back to Railway and update `CLIENT_URL` with your Vercel URL

### MongoDB Atlas (free)

1. [cloud.mongodb.com](https://cloud.mongodb.com) → Free M0 cluster
2. Database Access → create a user with read/write
3. Network Access → Allow from anywhere (`0.0.0.0/0`) for Railway
4. Connect → Drivers → copy the connection string into `MONGODB_URI`

---

## Customisation Checklist

- [ ] `client/src/components/Hero.jsx` — update social links
- [ ] `client/src/components/About.jsx` — update bio and add your photo
- [ ] `client/src/components/Skills.jsx` — adjust skills and percentages
- [ ] `client/src/components/Projects.jsx` — replace with your real projects
- [ ] `client/src/components/Experience.jsx` — update work history
- [ ] `client/src/components/Contact.jsx` — update email / LinkedIn / GitHub
- [ ] `client/index.html` — update `<title>` and meta description
- [ ] Add `client/public/resume.pdf` for the resume download link

# QuantSignal

A machine-learning stock-recommendation product landing page and waitlist application.

## Project Structure

```text
.
├── docker-compose.yml       # Local PostgreSQL database configuration
├── prisma/
│   └── schema.prisma        # Database schema (PostgreSQL)
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── actions.ts       # Server Actions for Waitlist logic
│   │   ├── globals.css      # Global styles (Tailwind)
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Landing page
│   │   └── waitlist/
│   │       └── page.tsx     # Waitlist page
│   ├── components/          # UI Components
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── WhoIsItFor.tsx
│   │   └── WaitlistForm.tsx
│   └── lib/
│       └── prisma.ts        # Prisma Client singleton
├── .env                     # Environment variables
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

The project uses a `.env` file for configuration. A default one has been created for you:

```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/quantsignal?schema=public"
```

### 3. Start Local Database (Docker)

Ensure you have Docker Desktop installed and running.

```bash
docker-compose up -d
```

This will start a PostgreSQL instance on port 5432.

### 4. Run Database Migrations

Apply the Prisma schema to your local database:

```bash
npx prisma migrate dev --name init
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Hostinger VPS

### Prerequisites

- A Hostinger VPS running Ubuntu.
- Node.js (LTS version) installed.
- PostgreSQL installed (or use the Docker setup on the VPS).
- Nginx (optional, for reverse proxy).
- PM2 (for process management).

### Steps

1. **SSH into your VPS.**

2. **Clone the repository** (or upload your files).

3. **Install Dependencies:**

    ```bash
    npm install
    npm install -g pm2
    ```

4. **Setup Database:**
    - If using Docker on VPS: `docker-compose up -d`
    - If using managed/installed Postgres: Update `.env` with the production `DATABASE_URL`.

5. **Build the App:**

    ```bash
    npm run build
    ```

6. **Run Migrations:**

    ```bash
    npx prisma migrate deploy
    ```

7. **Start the App with PM2:**

    ```bash
    pm2 start npm --name "quantsignal" -- start
    ```

8. **Configure Nginx (Recommended):**
    - Set up a reverse proxy pointing to `http://localhost:3000`.
    - Use Certbot to enable HTTPS.

### Environment Variables for Production

Ensure your `.env` file on the server has the correct production values:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname?schema=public"
NODE_ENV="production"
```

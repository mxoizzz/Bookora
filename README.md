# Bookora

Bookora is a full-stack booking marketplace MVP. Customers can browse live offers, pick available slots, create bookings, and view confirmations. Business owners can manage offers, bookings, slots, analytics, settings, status, and help pages from the admin dashboard.

## Tech Stack

- Backend: ASP.NET Core 8, Entity Framework Core, PostgreSQL, JWT auth, SignalR
- Frontend: React, TanStack Router/Query/Start, Vite, Tailwind CSS, Sonner toasts
- Database: PostgreSQL, tested with Neon
- Deployment: Render for backend, Vercel for frontend

## Project Structure

```text
backend/Bookora.API    ASP.NET Core API
frontend               React/TanStack frontend
```

## Backend Setup

Create `backend/Bookora.API/appsettings.Development.json` with your local values:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=bookora;Username=postgres;Password=your_password"
  },
  "Jwt": {
    "Key": "your-long-dev-secret-key",
    "Issuer": "Bookora",
    "Audience": "BookoraUsers"
  }
}
```

Run the API:

```powershell
cd backend/Bookora.API
dotnet run
```

Default local API URL:

```text
http://localhost:5118
```

Swagger:

```text
http://localhost:5118/swagger
```

## Frontend Setup

Install dependencies:

```powershell
cd frontend
bun install
```

For local development, use `frontend/.env.development.local`:

```env
VITE_API_URL=http://localhost:5118/api
VITE_SIGNALR_URL=http://localhost:5118/hubs/bookings
```

Run the frontend:

```powershell
cd frontend
bun run dev
```

Default frontend URL:

```text
http://localhost:8080
```

## Useful Commands

Backend build:

```powershell
dotnet build backend/Bookora.API/Bookora.API.csproj
```

Frontend build:

```powershell
cd frontend
bun run build
```

## Deployment

### Backend on Render

Set these environment variables on Render:

```env
ConnectionStrings__DefaultConnection=your_postgres_connection_string
Jwt__Key=your-long-production-secret-key
Jwt__Issuer=Bookora
Jwt__Audience=BookoraUsers
AllowedOrigins__0=https://bookora-ten.vercel.app
```

If you use Vercel preview deployments, add those URLs too:

```env
AllowedOrigins__1=https://your-preview-url.vercel.app
```

Render build/start commands depend on your service setup, but the backend project is:

```text
backend/Bookora.API/Bookora.API.csproj
```

### Frontend on Vercel

Deploy the `frontend` folder.

Set this environment variable in Vercel:

```env
VITE_API_URL=https://your-render-backend.onrender.com/api
```

Do not use `localhost` in Vercel environment variables.

Vercel uses:

```json
{
  "installCommand": "bun install",
  "buildCommand": "bun run build",
  "outputDirectory": ".output/public"
}
```

After changing environment variables, redeploy with **Clear build cache**.

## Common Deployment Fixes

- If the browser calls `http://localhost:5118`, Vercel has the wrong `VITE_API_URL`.
- If CORS fails from a Vercel URL, redeploy the backend and add the Vercel URL to `AllowedOrigins`.
- If the page shows `This page didn't load`, check Vercel server logs first. It is the frontend SSR fallback page.

## Current MVP Features

- Public offer marketplace
- Offer details page with live availability
- Slot selection and booking flow
- Booking confirmation page
- Business dashboard
- Dynamic bookings, slots, analytics, and sidebar counts
- Offer creation
- Realtime booking/offer updates through SignalR
- Toast notifications
- Mobile responsive admin navigation

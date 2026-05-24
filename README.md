# Bookora

<p align="center">
  <strong>Smart Offer Slot Booking System for service-based businesses</strong>
</p>

<p align="center">
  <a href="https://frontend-chi-gray-79.vercel.app/">Live Demo</a>
  ·
  <a href="#quick-start">Quick Start</a>
  ·
  <a href="#api--swagger">API & Swagger</a>
  ·
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
  <img alt=".NET 8" src="https://img.shields.io/badge/.NET-8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=111111" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

## Overview

Bookora is a full-stack booking marketplace MVP built for the **Smart Offer Slot Booking System** problem statement. It lets businesses publish limited-time offers with capacity-controlled slots, while customers can discover active offers, reserve seats, and receive a booking confirmation.

The product is designed for service-based businesses such as gyms, salons, restaurants, clinics, coaching classes, turfs, spas, gaming zones, and activity centers.

**Live frontend:** [https://frontend-chi-gray-79.vercel.app/](https://frontend-chi-gray-79.vercel.app/)

## Problem Statement Fit

| Requirement | Bookora Implementation |
| --- | --- |
| Admin login | JWT-based business owner login |
| Business profile | Business data model and admin profile surface |
| Offer management | Create and manage offers with pricing, capacity, terms, and status |
| Slot management | Offer slots with capacity, booked count, remaining count, and status |
| Public offer listing | Marketplace page with search, categories, filters, and available-only mode |
| Public offer detail | Real offer details with live availability and slot selection |
| Booking flow | Customer booking form with people count validation and confirmation page |
| Admin dashboard | Dynamic metrics, recent bookings, offers, slots, and analytics |
| API documentation | Swagger/OpenAPI enabled in the .NET API |
| Bonus features | Realtime updates, CSV export, responsive UI, QR-style pass, toasts |

## Features

### Customer Experience

- Browse active public offers
- Search and filter offers by category, availability, date, price, and business context
- View full offer details, price, discount, venue information, and terms
- Select an available slot
- Book with name, phone, email, people count, and optional note
- View a confirmation page with booking reference, slot time, status, and pass actions

### Business Admin Experience

- Sign in as a business owner
- Create offers with offer price, original price, discount, schedule, capacity, and terms
- Track bookings in a dynamic admin table
- View dynamic slots, booked counts, remaining capacity, and statuses
- Monitor dashboard and analytics metrics
- Export bookings as CSV
- Use responsive admin navigation on mobile
- Receive toast notifications for key actions

### Realtime Behavior

- Booking creation updates slot capacity
- Offer availability updates across marketplace/detail/admin surfaces
- SignalR hub broadcasts booking and offer changes

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, TypeScript, TanStack Router, TanStack Query, TanStack Start |
| Styling | Tailwind CSS, component-based UI, responsive layouts |
| Backend | ASP.NET Core 8 Web API |
| Database | PostgreSQL with Entity Framework Core |
| Auth | JWT Bearer authentication |
| Realtime | SignalR |
| API Docs | Swagger/OpenAPI |
| Deployment | Vercel frontend, Render backend |

## Project Structure

```text
Bookora/
├─ backend/
│  └─ Bookora.API/
│     ├─ Controllers/
│     ├─ DTOs/
│     ├─ Models/
│     ├─ Repositories/
│     ├─ Services/
│     ├─ Hubs/
│     └─ Program.cs
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ hooks/
│  │  ├─ lib/
│  │  └─ routes/
│  ├─ vercel.json
│  └─ vite.config.ts
└─ README.md
```

## Quick Start

### Prerequisites

- .NET SDK 8
- Bun
- PostgreSQL database

### 1. Clone and Install

```powershell
git clone https://github.com/mxoizzz/Bookora
cd Bookora
cd frontend
bun install
```

### 2. Backend Environment

Create `backend/Bookora.API/appsettings.Development.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=bookora;Username=postgres;Password=your_password"
  },
  "Jwt": {
    "Key": "your-long-dev-secret-key-at-least-32-characters",
    "Issuer": "Bookora",
    "Audience": "BookoraUsers"
  }
}
```

### 3. Frontend Environment

Use `frontend/.env.development.local` for local development:

```env
VITE_API_URL=http://localhost:5118/api
VITE_SIGNALR_URL=http://localhost:5118/hubs/bookings
```

For production, use `frontend/.env.example` as the reference:

```env
VITE_API_URL=https://bookora-y4uy.onrender.com/api
```

### 4. Run Backend

```powershell
cd backend/Bookora.API
dotnet run
```

Backend runs at:

```text
http://localhost:5118
```

### 5. Run Frontend

```powershell
cd frontend
bun run dev
```

Frontend runs at:

```text
http://localhost:8080
```

## API & Swagger

Swagger is available locally after starting the backend:

```text
http://localhost:5118/swagger
```

Key API areas:

| Area | Endpoints |
| --- | --- |
| Auth | Login and JWT token issuing |
| Business | Create, read, update business profile |
| Offers | Create, list, detail, update, status-aware public offers |
| Slots | List slots by offer, track capacity and remaining seats |
| Bookings | Create booking, fetch confirmation, admin booking views |
| Realtime | SignalR booking hub at `/hubs/bookings` |

## Data Model

Core database tables:

- `Users`
- `Businesses`
- `Offers`
- `OfferSlots`
- `Bookings`

Important business rules:

- Offer price must be lower than original price
- Expired offers cannot be booked
- Full slots cannot be booked
- Booked count increases after successful booking
- Booking references are unique
- Cancelled or expired offers are hidden from the public marketplace
- Customer phone number is checked against per-offer booking limits

## Build Commands

Backend:

```powershell
dotnet build backend/Bookora.API/Bookora.API.csproj
```

Frontend:

```powershell
cd frontend
bun run build
```

## Deployment

### Frontend on Vercel

Deploy the `frontend` folder.

Current live frontend:

```text
https://frontend-chi-gray-79.vercel.app/
```

Required Vercel environment variable:

```env
VITE_API_URL=https://your-render-backend.onrender.com/api
```

Do **not** use `localhost` in Vercel environment variables.

Vercel config:

```json
{
  "installCommand": "bun install",
  "buildCommand": "bun run build",
  "outputDirectory": ".output/public"
}
```

After changing environment variables, redeploy with **Clear build cache**.

### Backend on Render

Set these environment variables on Render:

```env
ConnectionStrings__DefaultConnection=your_postgres_connection_string
Jwt__Key=your-long-production-secret-key
Jwt__Issuer=Bookora
Jwt__Audience=BookoraUsers
AllowedOrigins__0=https://frontend-chi-gray-79.vercel.app
```

For Vercel preview deployments, add extra origins:

```env
AllowedOrigins__1=https://your-preview-url.vercel.app
```

Backend project path:

```text
backend/Bookora.API/Bookora.API.csproj
```

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Browser calls `http://localhost:5118` on Vercel | Set `VITE_API_URL` in Vercel to the Render backend URL and redeploy with cleared cache |
| CORS fails from Vercel | Add the Vercel URL to Render env `AllowedOrigins__0`, then redeploy backend |
| Page shows `This page didn't load` | Check Vercel server logs. This is the frontend SSR fallback page |
| SignalR negotiate fails | Confirm backend URL is correct and CORS allows credentials for the Vercel origin |
| API returns 404 | Confirm the frontend URL includes `/api` in `VITE_API_URL` |

## Hackathon Submission Checklist

- [x] Public GitHub-ready source code
- [x] README with setup steps
- [x] React + TypeScript frontend
- [x] Tailwind CSS styling
- [x] .NET 8 Web API backend
- [x] PostgreSQL database support
- [x] Swagger/OpenAPI documentation
- [x] Admin login and dashboard
- [x] Offer listing, details, booking, and confirmation flow
- [x] Dynamic admin bookings, slots, and analytics
- [x] `.env.example` file
- [ ] Add final frontend screenshots
- [ ] Add Swagger screenshot
- [ ] Add ER diagram screenshot
- [ ] Add demo video link

## License & Hackathon Note

This project was built for the Willovate full-stack hackathon problem statement. The submission follows the required stack and focuses on the Smart Offer Slot Booking System workflow.

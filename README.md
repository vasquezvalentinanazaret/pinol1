# PinolApp Production (Nica Payments)

Monorepo con:
- apps/user-mobile-app (Expo)
- apps/driver-mobile-app (Expo)
- apps/admin-dashboard (Next.js)
- backend (Node.js + Express + Socket.io + JWT)
- database (SQL)

## Quick start

### 1) Backend
cd backend
npm install
cp .env.example .env
npm run dev

### 2) User App (Expo)
cd apps/user-mobile-app
npm install
npm run start

### 3) Driver App (Expo)
cd apps/driver-mobile-app
npm install
npm run start

### 4) Admin Dashboard
cd apps/admin-dashboard
npm install
npm run dev

## Notas
- Pagos: cash, transfer, card (simulada)
- API por defecto: http://localhost:4000
- Sockets: http://localhost:4000

## Producción
- Backend en Docker/Render/Railway
- Frontend en Vercel
- DB en Supabase/PostgreSQL

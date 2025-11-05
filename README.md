# The Pimp Koto Project - Backend

A modern Fastify backend application built with TypeScript, PostgreSQL, Drizzle ORM, Better Auth, and Docker containerization.

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- [pnpm](https://pnpm.io/) (for local development)
- [Node.js 22+](https://nodejs.org/) (for editor support)

### Setup

1. Clone the repository
2. Copy environment file: `cp .env.example .env`
3. Update the `.env` file with your database credentials
4. Install dependencies for editor support: `pnpm install`
5. Start the database: `pnpm docker:dev`
6. Run database migrations: `pnpm drizzle-kit:migrate`

## 🐳 Docker Development

### Development Environment

Start the complete development stack with hot reloading:

```bash
pnpm docker:dev
```

This starts:

- **Fastify Backend** on [http://localhost:8000](http://localhost:8000)
- **PostgreSQL Database** on port 5432
- **pgAdmin** on [http://localhost:8080](http://localhost:8080)

### Development Commands

```bash
# Start development environment
pnpm docker:dev

# Stop development environment
pnpm docker:dev:stop

# View logs
pnpm docker:dev:logs

# Clean up (removes containers and volumes)
pnpm docker:dev:clean
```

## 🗄️ Database Management

### Drizzle ORM

This project uses Drizzle ORM for type-safe database operations.

```bash
# Generate database migrations
pnpm drizzle-kit:generate

# Apply migrations to database
pnpm drizzle-kit:migrate

# Open Drizzle Studio (database browser)
pnpm drizzle-kit:studio
```

### Better Auth

Authentication is handled by Better Auth for secure user management.

```bash
# Generate auth schema
pnpm better-auth:generate
```

## 🏭 Production Deployment

### Production Environment

Deploy the production-ready stack:

```bash
pnpm docker:prod
```

This starts:

- **Fastify Backend** (optimized build) on port 8000
- **PostgreSQL Database** on port 5432

### Production Commands

```bash
# Start production environment
pnpm docker:prod

# Stop production environment
pnpm docker:prod:stop

# View logs
pnpm docker:prod:logs

# Clean up (removes containers and volumes)
pnpm docker:prod:clean
```

## 🛠️ Local Development (Alternative)

For local development without Docker:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build TypeScript
pnpm build:ts

# Start production server
pnpm start

# Run tests
pnpm test
```

## 📁 Project Structure

```
src/
├── app.ts              # Main Fastify application
├── auth.ts             # Better Auth configuration
├── db/                 # Database configuration
│   ├── index.ts        # Database connection
│   └── schema.ts       # Drizzle schema definitions
├── plugins/            # Fastify plugins
│   ├── sensible.ts
│   └── support.ts
└── routes/             # API routes
    ├── root.ts
    └── example/
        └── index.ts

drizzle/                # Database migrations
├── meta/               # Migration metadata
└── *.sql              # Generated SQL migrations

drizzle.config.ts       # Drizzle ORM configuration
docker/                 # Docker configuration
├── postgres/           # PostgreSQL setup
└── pgadmin/           # pgAdmin configuration

test/                  # Test files
```

## 🔧 Configuration

### Environment Variables

Configure your application in `.env`:

```bash
# Database Configuration
POSTGRES_DB=pimp_koto_dev
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password
POSTGRES_PORT=5432
POSTGRES_DB_URL=postgresql://postgres:your_secure_password@localhost:5432/pimp_koto_dev
POSTGRES_DB_URL_DOCKER=postgresql://postgres:your_secure_password@postgres:5432/pimp_koto_dev

# pgAdmin Configuration (Development only)
PGADMIN_DEFAULT_EMAIL=your.email@example.com
PGADMIN_DEFAULT_PASSWORD=your_pgadmin_password

# Better Auth Configuration
BETTER_AUTH_SECRET=your_randomly_generated_secret_key
```

### Database URLs

The project uses two different database URLs:

- **`POSTGRES_DB_URL`**: For host machine connections (migrations, local development)
- **`POSTGRES_DB_URL_DOCKER`**: For Docker container connections (uses service name `postgres`)

### Docker Architecture

- **Multi-stage Dockerfile** with base, development, and production stages
- **Named volumes** for data persistence
- **Development**: Includes hot reloading and pgAdmin
- **Production**: Optimized build with security features

## 🧪 Testing

```bash
# Run tests in Docker environment
docker exec pimp-koto-backend-dev pnpm test

# Or run tests locally
pnpm test
```

## 📚 API Documentation

The API is built with Fastify. Once running, you can explore:

- API endpoints at [http://localhost:8000](http://localhost:8000)
- Auto-generated docs (if configured)

## 🔗 Useful Links

- [Fastify Documentation](https://fastify.dev/docs/latest/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [pnpm Documentation](https://pnpm.io/)

## 🏗️ Tech Stack

- **Runtime**: Node.js 22+
- **Framework**: Fastify
- **Language**: TypeScript
- **Database**: PostgreSQL 17
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **Package Manager**: pnpm
- **Containerization**: Docker & Docker Compose
- **Database Admin**: pgAdmin (development)

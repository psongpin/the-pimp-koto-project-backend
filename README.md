# The Pimp Koto Project - Backend

A modern Fastify backend application with TypeScript, PostgreSQL, and Docker.

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- [pnpm](https://pnpm.io/)
- [Node.js 22+](https://nodejs.org/)

### Setup

1. Clone the repository
2. Copy environment file: `cp .env.example .env`
3. Update the `.env` file with your database credentials
4. Start the development environment: `pnpm docker:dev`
5. Run database migrations: `pnpm drizzle-kit:migrate`

## 🐳 Docker Commands

### Development

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

### Production

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

### Cleanup

```bash
# Clean up Docker images and build cache
pnpm docker:cleanup

# Aggressive cleanup (removes all unused Docker resources)
pnpm docker:cleanup:all
```

## 🗄️ Database Commands

```bash
# Generate database migrations
pnpm drizzle-kit:generate

# Apply migrations to database
pnpm drizzle-kit:migrate

# Open Drizzle Studio (database browser)
pnpm drizzle-kit:studio

# Generate auth schema
pnpm better-auth:generate
```

## 🛠️ Development Commands

### Local Development (Alternative to Docker)

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

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## 🔧 Environment Configuration

Create a `.env` file with:

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

## 🌐 Services

When running, the following services will be available:

- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **pgAdmin** (dev only): [http://localhost:8080](http://localhost:8080)
- **PostgreSQL**: localhost:5432

## 🚨 Troubleshooting

### Docker Issues

```bash
# Clean up and rebuild
pnpm docker:cleanup:all
pnpm docker:dev
```

### Database Issues

```bash
# View database logs
pnpm docker:dev:logs

# Reset database
pnpm docker:dev:clean
pnpm docker:dev
pnpm drizzle-kit:migrate
```

### TypeScript Issues

```bash
# Rebuild TypeScript
pnpm build:ts

# Check for errors
pnpm lint
```

## 🏗️ Tech Stack

- **Runtime**: Node.js 22+ (Alpine Linux)
- **Framework**: Fastify
- **Language**: TypeScript
- **Database**: PostgreSQL 17
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **Package Manager**: pnpm
- **Containerization**: Docker & Docker Compose

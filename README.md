# The Pimp Koto Project - Backend

A modern Fastify backend application built with TypeScript and Docker containerization.

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- [pnpm](https://pnpm.io/) (for local development)
- [Node.js 22+](https://nodejs.org/) (for editor support)

### Setup

1. Clone the repository
2. Copy environment file: `cp .env.example .env`
3. Install dependencies for editor support: `pnpm install`

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
├── plugins/            # Fastify plugins
│   ├── sensible.ts
│   └── support.ts
└── routes/             # API routes
    ├── root.ts
    └── example/
        └── index.ts

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
POSTGRES_PASSWORD=your_password
POSTGRES_PORT=5432

# pgAdmin Configuration (Development only)
PGADMIN_DEFAULT_EMAIL=your.email@example.com
PGADMIN_DEFAULT_PASSWORD=your_pgadmin_password
```

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
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [pnpm Documentation](https://pnpm.io/)

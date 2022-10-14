# Build tRPC API with Next.js & PostgreSQL: Access & Refresh Tokens

This article will teach you how to secure a tRPC API server with JWT authentication using  Next.js, PostgreSQL, Prisma, Redis, and Docker-compose.

![Build tRPC API with Next.js & PostgreSQL: Access & Refresh Tokens](https://codevoweb.com/wp-content/uploads/2022/08/tRPC-API-with-Next.js-Prisma-PostgreSQL-Access-Refresh-Tokens.webp)

## Topics Covered

- Set up the tRPC Project
- Create the Database Models with Prisma
    - Running the Database Migration with Prisma
- Create the Schemas with Zod
- Create Functions to Sign and Verify JWTs
    - How to Generate the JWT Private and Public Keys
    - Function to Sign the JWT Tokens
    - Function to Verify the JWT Tokens
- Create the Database Services
- Create the Authentication Controllers
    - Register User tRPC Controller
    - Login User tRPC Controller
    - Refresh Access Token tRPC Controller
    - Logout User tRPC Controller
- Create a User Controller
- Create the tRPC Authentication Guard
- Create the tRPC Endpoints
    - Add the Authentication Routes
    - Add the User Routes
- Merge the tRPC Routes
- Add the tRPC Routes to the Next.js Router

Read the entire article here: [https://codevoweb.com/trpc-api-with-nextjs-postgresql-access-refresh-tokens](https://codevoweb.com/trpc-api-with-nextjs-postgresql-access-refresh-tokens)

Articles in this series:

### 1. How to Setup tRPC API Server & Client with Next.js and Prisma

[How to Setup tRPC API Server & Client with Next.js and Prisma](https://codevoweb.com/setup-trpc-api-server-client-with-nextjs-and-prisma)

### 2. Build tRPC API with Next.js & PostgreSQL: Access & Refresh Tokens

[Build tRPC API with Next.js & PostgreSQL: Access & Refresh Tokens](https://codevoweb.com/trpc-api-with-nextjs-postgresql-access-refresh-tokens)

### 3. Full-Stack Next.js tRPC App: User Registration & Login Example

[Full-Stack Next.js tRPC App: User Registration & Login Example](https://codevoweb.com/fullstack-nextjs-trpc-app-user-registration-login-example/)

### 4. Build a tRPC CRUD API Example with Next.js

[Build a tRPC CRUD API Example with Next.js](https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/)

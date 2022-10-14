# tRPC API Server & Client with Next.js and Prisma

## 1. How to Setup tRPC API Server & Client with Next.js and Prisma

This article will teach you how to set up a tRPC API server and client with Next.js, PostgreSQL, React Query, Prisma, Redis, and Docker-compose.

![How to Setup tRPC API Server & Client with Next.js and Prisma](https://codevoweb.com/wp-content/uploads/2022/08/How-to-Setup-tRPC-API-Server-Client-with-Next.js-and-Prisma.webp)

### Topics Covered

- Setup Next.js as a Monolithic Repository
- Setup Redis and PostgreSQL with Docker
  - Adding the Docker-compose Configurations
  - Adding the PostgreSQL Docker Image Credentials
  - Starting the Redis and PostgreSQL Docker Containers
- Setup Prisma with PostgreSQL
  - Creating the Database Models with Prisma
  - Migrating the Prisma Schema to the PostgreSQL Database
- Creating the Next.js tRPC Server
  - Installing the tRPC dependencies
  - Connecting to the Redis and PostgreSQL Containers
  - Creating the tRPC Context and Routes
  - Adding the tRPC Routes to the Next.js API Router
  - Testing the Next.js tRPC Server
- Setup tailwindCss in the tRPC Next.js Project
- Creating the Next.js tRPC Client

Read the entire article here: [https://codevoweb.com/setup-trpc-api-server-client-with-nextjs-and-prisma](https://codevoweb.com/setup-trpc-api-server-client-with-nextjs-and-prisma)

## 2. Build tRPC API with Next.js & PostgreSQL: Access & Refresh Tokens

This article will teach you how to secure a tRPC API server with JWT authentication using Next.js, PostgreSQL, Prisma, Redis, and Docker-compose.

![Build tRPC API with Next.js & PostgreSQL: Access & Refresh Tokens](https://codevoweb.com/wp-content/uploads/2022/08/tRPC-API-with-Next.js-Prisma-PostgreSQL-Access-Refresh-Tokens.webp)

### Topics Covered

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

## 3. Full-Stack Next.js tRPC App: User Registration & Login Example

In this article, we'll build a full-stack Next.js tRPC app to register and sign in a user using React Query, TypeScript, React-Hook-Form, and Zod.

![Full-Stack Next.js tRPC App: User Registration & Login Example](https://codevoweb.com/wp-content/uploads/2022/08/Full-Stack-Next.js-tRPC-App-User-Registration-Login-Example.webp)

### Topics Covered

- Next.js tRPC API Server and Client Overview
- Setup the Next.js tRPC Server and Client
- Add the Zustand State Management Library
- Create Reusable Next.js Components
  - Create a Loading Spinner Component
  - Create a Loading Button Component
  - Create a FullScreen Loader Component
  - Create the tRPC Client Header Component
  - Create an InputField Component with React-Hook-Form
  - Create an Image Uploader Component
- Create the tRPC Client to Register a User
- Create the tRPC Client to Sign in the User
- Create the tRPC Authentication Guard
- Create the Remaining Next.js Pages
  - Home Page
  - Profile Page
- Update the App File

Read the entire article here: [https://codevoweb.com/fullstack-nextjs-trpc-app-user-registration-login-example](https://codevoweb.com/fullstack-nextjs-trpc-app-user-registration-login-example)

## 4. Build a tRPC CRUD API Example with Next.js

In this article, we’ll build a type-safe tRPC CRUD API with Next.js, PostgreSQL, and Prisma. This tRPC example in Next.js will showcase how to use tRPC on the backend and later we will consume the API on the frontend app.

![Build a tRPC CRUD API Example with Next.js](https://codevoweb.com/wp-content/uploads/2022/08/Create-a-tRPC-CRUD-API-Example-with-Next.js-1024x576.webp)

### Topics Covered

- Setup the tRPC Project with Next.js
- Create the Database Models with Prisma
  - Create the Database Schema
  - Migrate the Schema to the Database
- Create the Validation Schemas
- Create Reusable Database Services
- Create the tRPC Procedure Controllers - Create Mutation tRPC Procedure Handler - Get Single Query tRPC Procedure Handler - Get All Records Query tRPC Procedure Handler - Update Mutation tRPC Procedure Handler - Delete Mutation tRPC Procedure Handler
- Create the tRPC Procedure Routes - Creating the tRPC Procedure Endpoints - Merging the tRPC Endpoints - Add the tRPC Endpoints to the Next.js Router

Read the entire article here: [https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js](https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js)

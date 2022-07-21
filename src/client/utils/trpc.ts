import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../../server/routers/app.routes';

export const trpc = createReactQueryHooks<AppRouter>();

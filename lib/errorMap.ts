import * as zod from 'zod';

import { fromZodIssue } from './fromZodIssue';

export const errorMap: zod.ZodErrorMap = (issue, ctx) => {
  const error = fromZodIssue({
    ...issue,
    // fallback to the default error message
    // when issue does not have a message
    message: issue.message ?? ctx.defaultError,
  });

  return {
    message: error.message,
  };
};

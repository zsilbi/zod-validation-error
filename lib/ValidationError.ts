import * as zod from 'zod';

export class ValidationError extends Error {
  name: 'ZodValidationError';
  details: Array<zod.ZodIssue>;

  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'ZodValidationError';
    this.details = getIssuesFromErrorOptions(options);
  }

  toString(): string {
    return this.message;
  }
}

function getIssuesFromErrorOptions(
  options?: ErrorOptions
): Array<zod.ZodIssue> {
  if (options) {
    const cause = options.cause;

    if (cause instanceof zod.ZodError) {
      return cause.issues;
    }
  }

  return [];
}

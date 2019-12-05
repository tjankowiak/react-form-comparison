import { emailPattern } from 'utils/patterns';

export const required = (value) => (value ? undefined : 'Field is required');
export const mustBeNumber = (value) => (isNaN(value) ? 'Field must be a number' : undefined);
export const email = (value) => (emailPattern.test(value) ? undefined : 'Invalid email address');

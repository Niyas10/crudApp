// Utility functions and helpers
// Add your utility functions here

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};

export const handleError = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

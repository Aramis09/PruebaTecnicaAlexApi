export const buildErrorValidator = (type: string, nullable?: boolean) => {
  const baseError = {
    invalid_type_error: `Value must be a ${type}`,
  };
  if (!nullable) {
    return { ...baseError, required_error: `Value is required.` };
  }
  return baseError;
};

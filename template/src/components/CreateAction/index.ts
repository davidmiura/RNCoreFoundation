export function createAction(type: string, payload?: {}) {
  return {
    type,
    payload,
  };
}

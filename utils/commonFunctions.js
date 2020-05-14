export function truncateString(data, length) {
  if (typeof data !== 'string' && !(data instanceof String)) {
    return data;
  }

  if (data.length <= length) {
    return data;
  }

  return `${data.slice(0, length).trim()}...`;
}
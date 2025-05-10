export const createQueryOptions = (
  classQuery,
  query: Record<string, string>,
) => {
  const validProperties = Object.getOwnPropertyNames(new classQuery());
  let pagination = { skip: 0, take: 10 };
  const where = Object.keys(query).reduce((acc, key) => {
    if (query[key] && validProperties.includes(key)) {
      acc[key] = query[key];
    }
    return acc;
  }, {});

  if (query.page || query.size) {
    const page = (parseInt(query.page, 10) || 1) - 1;
    const size = parseInt(query.size, 10) || 10;
    pagination = { skip: page * size, take: size };
  }

  return { where, pagination };
};

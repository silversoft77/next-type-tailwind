export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    const uni: string[] = Array.from(new Set(unique));
    return ["all", ...uni];
  };
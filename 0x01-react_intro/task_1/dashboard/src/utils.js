const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
}

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'ALX';
    }

    return 'ALX main dahsboard';
}

export { getFullYear, getFooterCopy };
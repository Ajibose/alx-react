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

const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

export { getFullYear, getFooterCopy, getLatestNotification };
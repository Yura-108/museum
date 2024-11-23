const truncateTitle = (title: string, wordLimit: number = 3): string => {
  const words = title.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return title;
};

export default truncateTitle;

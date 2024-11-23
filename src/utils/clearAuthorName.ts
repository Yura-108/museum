const cleanAuthorName = (author: string): string => {
  return author.split(',')[0].trim();
};

export default cleanAuthorName;

export const searchDataset = (dataset, searchKey) => {
  if (!dataset) {
    return [];
  }

  if (!searchKey) return dataset;

  // Convert the search key to lowercase for case-insensitive matching
  const lowercaseSearchKey = searchKey?.toLowerCase();

  // Filter the dataset based on the search criteria
  const filteredData = dataset?.filter((item) => {
    const title = item?.title?.toLowerCase();
    const sourceName = item?.source?.name?.toLowerCase();
    const content = item?.content?.toLowerCase();
    const description = item?.description?.toLowerCase();

    return (
      title?.includes(lowercaseSearchKey) ||
      sourceName?.includes(lowercaseSearchKey) ||
      content?.includes(lowercaseSearchKey) ||
      description?.includes(lowercaseSearchKey)
    );
  });

  return filteredData;
};

export const validateForm = (data) => data?.email && data?.password;

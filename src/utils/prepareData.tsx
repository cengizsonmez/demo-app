import { FilterOperator, SortOrder } from "../constants/types";

export const PrepareData = async (
  response: Response,
  filters: Record<string, { value: any; operator: FilterOperator }>,
  sortOrder: SortOrder
) => {
  try {
    const data = await response.json();

    const filteredItems = data.entries
      .filter((element: any) => {
        const filterConditions = Object.entries(filters).map(
          ([key, filter]) => {
            switch (filter.operator) {
              case "equals":
                return (item: any) => item[key] === filter.value;
              case "greaterThanOrEqual":
                return (item: any) => item[key] >= filter.value;
              case "greaterThan":
                return (item: any) => item[key] > filter.value;
              case "lessThanOrEqual":
                return (item: any) => item[key] <= filter.value;
              case "lessThan":
                return (item: any) => item[key] < filter.value;
              default:
                return () => true;
            }
          }
        );
        return filterConditions.every((condition) => condition(element));
      })
      .map((item: any) => {
        return {
          title: item.title,
          imageUrl: item.images["Poster Art"]?.url,
        };
      });

    const sortedItems = sortItems(filteredItems, sortOrder);

    return sortedItems;
  } catch (err) {
    throw err;
  }
};

const sortItems = (
  items: { title: string; imageUrl: string }[],
  sortOrder: string
) => {
  return items.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
};

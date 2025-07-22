import { useCallback, useEffect, useState } from "react";

interface UseInfiniteScrollProps<T> {
  items: T[];
  itemsPerPage: number;
}

function useInfiniteScroll<T>({ items, itemsPerPage }: UseInfiniteScrollProps<T>) {
  const [displayedItems, setDisplayedItems] = useState<T[]>(items.slice(0, itemsPerPage));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const canShowMore = displayedItems.length < items.length;

  const showMore = useCallback(() => {
    if (!isLoading && canShowMore) {
      setIsLoading(true);
      setTimeout(() => {
        const nextItems = items.slice(0, (page + 1) * itemsPerPage);
        setDisplayedItems(nextItems);
        setPage(page + 1);
        setIsLoading(false);
      }, 500);
    }
  }, [isLoading, canShowMore, items, page, itemsPerPage]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 300
    ) {
      showMore();
    }
  }, [showMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setDisplayedItems(items.slice(0, page * itemsPerPage));
  }, [items, page, itemsPerPage]);

  return { displayedItems, isLoading, showMore, canShowMore };
}

export default useInfiniteScroll; 
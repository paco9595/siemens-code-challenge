import { useEffect, useState } from "react";

export default function usePagination<T>(url: string, { per_page, defaultPage } = { defaultPage: 1, per_page: 4 }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(defaultPage || 1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, count:countData } = await fetch(`${url}?page=${page}&per_page=${per_page}`).then((res) => res.json());
      setData(data);
      const lastPage = (countData - (countData % per_page)) / per_page + 1
      
      if (page === lastPage) {
        setIsLastPage(true)
      }else {
        setIsLastPage(false)
      }
    };


    try {
      setIsLoading(true)
      fetchData();
    } catch (e) {
      throw Error(e)
    } finally {
      setIsLoading(false)
    }

  }, [page, url]);

  const next = () => {
    if (isLastPage) return
    setPage((old) => ++old);
  };

  const previous = () => {
    if (page === 1) return
    setPage((old) => --old);
  };

  return {
    isLastPage,
    isLoading,
    page,
    data,
    next,
    previous,
  };
}

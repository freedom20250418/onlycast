import { useRequestSDK } from "@/providers/request-sdk-provider";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useTokens(limit: number) {
  const { sdk } = useRequestSDK();

  return useInfiniteQuery({
    queryKey: ["tokens", limit], // 包含limit的查询键
    queryFn: async ({ pageParam }) => {
      const res = await sdk.getTokens({
        page: pageParam,
        limit: limit,
      });
      const data = res.data?.data || [];
      const nextPage = data.length === limit ? (pageParam || 1) + 1 : undefined;
      return {
        data,
        nextPage,
      };
    },
    initialPageParam: 1, // 初始页码
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage || undefined;
    },
    getPreviousPageParam: (firstPage) => {
      // 如果需要向前分页（这里不需要）
      return undefined;
    },
    staleTime: 10 * 60 * 1000, // 10分钟缓存
    refetchOnWindowFocus: false, // 避免窗口聚焦时刷新
  });
}

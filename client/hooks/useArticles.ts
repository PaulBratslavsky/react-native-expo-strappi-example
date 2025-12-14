import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getArticles, getArticleBySlug, type GetArticlesParams } from "@/data/loaders";

// Standard query for articles with pagination
export function useArticles(params?: GetArticlesParams) {
  return useQuery({
    queryKey: ["articles", params],
    queryFn: () => getArticles(params),
  });
}

// Infinite query for load more / infinite scroll
export function useInfiniteArticles(tag?: string) {
  return useInfiniteQuery({
    queryKey: ["articles", "infinite", tag],
    queryFn: ({ pageParam = 1 }) => getArticles({ page: pageParam, tag }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, pageCount } = lastPage.meta.pagination || { page: 1, pageCount: 1 };
      return page < pageCount ? page + 1 : undefined;
    },
  });
}

// Query for single article by slug
export function useArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticleBySlug(slug),
    enabled: !!slug,
  });
}

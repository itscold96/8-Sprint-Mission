import { ARTICLES_QUERY_KEY } from '@/constants/queryKeys';
import { axiosInstance } from './setupAxios';

export type orderType = 'like' | 'recent';

export interface IArticle {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

interface ArticlesResponse {
  list: IArticle[];
  totalCount: number;
}

export interface GetArticlesProps {
  page?: number;
  size?: number;
  order?: orderType;
  keyword?: string;
}

const getArticles = async ({
  page = 1,
  order = 'recent',
  size = 10,
  keyword = '',
}: GetArticlesProps): Promise<ArticlesResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: size.toString(),
    orderBy: order,
    keyword,
  });
  console.log('params: ', params.toString());
  const { data } = await axiosInstance.get(
    `/${ARTICLES_QUERY_KEY}?${params.toString()}`
  );

  return data;
};

export default getArticles;

import useArticlesQuery from '@/hooks/queries/useArticlesQuery';
import BestArticle from './BestArticle';
import styles from './BestArticleList.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';

function BestArticleList() {
  // TODO: 커스텀 훅으로 분리시키기
  const { innerWidth } = useWindowSize();
  const querySize =
    innerWidth > DEVICE_MAX_WIDTH.tablet // 태블릿 사이즈보다 크면 3개
      ? '3'
      : innerWidth > DEVICE_MAX_WIDTH.mobile // 태블릿 사이즈보다 작고 모바일 사이즈보다 크면 2개
      ? '2'
      : '1'; //그보다 작으면 1개

  const {
    data: { list: BestArticleList },
  } = useArticlesQuery({ order: 'like', size: querySize });

  return (
    <>
      <h2>베스트 게시글</h2>
      <div className={styles.BestArticleList}>
        {BestArticleList.map((bestArticle) => {
          const {
            id,
            title,
            writer: { nickname },
            image,
            likeCount,
            createdAt,
          } = bestArticle;

          const createDate = createdAt.split('T')[0];
          return (
            <BestArticle
              key={id}
              title={title}
              nickname={nickname}
              imageUrl={image}
              likeCount={likeCount}
              createdAt={createDate}
            />
          );
        })}
      </div>
    </>
  );
}

export default BestArticleList;
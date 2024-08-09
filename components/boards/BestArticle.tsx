import styles from './BestArticle.module.scss';
import CustomImage from '../@shared/CustomImage';
import BestIcon from '@/public/images/boards/best-icon.png';
import likeImg from '@/public/images/market/like-icon.png';

interface BestArticleProps {
  title: string;
  imageUrl: string;
  likeCount: number;
  createdAt: string;
  nickname: string;
}

function BestArticle({
  title,
  nickname,
  imageUrl,
  likeCount,
  createdAt,
}: BestArticleProps) {
  return (
    <article className={styles.bestArticle}>
      <div className={styles.bestArticleDeco}>
        <CustomImage
          src={BestIcon}
          alt={'베스트 상품 메달 아이콘'}
          height={16}
          width={16}
        />
        <span>Best</span>
      </div>

      <div className={styles.articleContent}>
        <div>{title}</div>
        <CustomImage
          src={imageUrl}
          alt={'베스트 상품 이미지'}
          height={72}
          width={72}
          radius={6}
          aspectRatio={1}
        />
      </div>

      <div className={styles.articleInfo}>
        <div className={styles.authorNameAndLikeCount}>
          <span className={styles.authorName}>{nickname}</span>
          <div className={styles.likeCount}>
            <CustomImage
              src={likeImg}
              alt={'좋아요 아이콘'}
              height={16}
              width={16}
            />
            <span>{likeCount}</span>
          </div>
        </div>
        <span className={styles.createdAt}>{createdAt}</span>
      </div>
    </article>
  );
}

export default BestArticle;
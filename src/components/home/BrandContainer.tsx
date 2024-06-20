import { ReactNode } from 'react';
import styled from 'styled-components';

interface BrandContainerProps {
  children: ReactNode;
}

function BrandContainer({ children }: BrandContainerProps) {
  return <StyledBrandContainer>{children}</StyledBrandContainer>;
}

export default BrandContainer;

const StyledBrandContainer = styled.article`
  /* 홈 페이지 상 하단 브랜드 소개 공동 스타일*/
  display: flex;
  justify-content: center;
  height: 54rem;
  background-color: var(--pale-blue);

  @media all and (max-width: 1199px) {
    height: auto;
    max-height: 77.1rem;
  }

  & .container {
    height: 100%;
    width: 120rem;
    position: relative;
    display: flex;
    align-items: center;

    @media all and (max-width: 1199px) {
      flex-direction: column;
      /* 이미지가 잘려도 되도록 hidden 속성 부여*/
      overflow-x: hidden;
    }

    & .text-wrapper {
      @media all and (max-width: 1199px) {
        padding: 8.4rem 0 10rem;

        // 폰트와 함께 버튼을 중앙 정렬시키기 위힘
        text-align: center;
      }

      & h1 {
        width: 30rem;
        min-width: 23.6rem;
        font-size: 4rem;
        font-weight: 700;
        line-height: 5.6rem;
        text-align: left;
        color: var(--cool-gray);

        @media all and (max-width: 1199px) {
          text-align: center;
        }

        @media all and (min-width: 768px) and (max-width: 1199px) {
          width: 100%;
        }
      }

      /* 브랜드 대표 이미지 공통 위치 조정 */
      .brand-image {
        position: absolute;
        left: 35rem; /* 뷰포트 너비에 구애 받지 않아야 하므로 .container를 기준으로 피그마를 참고해 다시 계산한 값 */
        bottom: 0;

        @media all and (max-width: 1199px) {
          position: static;
          /* 이미지가 확대 되어 필요 이상으로 잘리지 않도록 max-width 지정*/
          max-width: 135%;
          height: 100%;
        }
      }
    }
  }
`;

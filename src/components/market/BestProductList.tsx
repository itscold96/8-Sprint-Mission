import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import usePageSize from 'hooks/usePageSize';

function BestProductList() {
  const pageSize = usePageSize('best');
  const {
    data: { list: productList },
  } = useProductsQuery({ order: 'favorite', size: pageSize });

  return (
    <StyledBestProductsSection>
      {productList.map(({ id, name, price, images, favoriteCount }) => (
        <Product key={id} name={name} images={images} price={price} favoriteCount={favoriteCount} />
      ))}
    </StyledBestProductsSection>
  );
}

export default BestProductList;

const StyledBestProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  gap: 2.4rem;
`;

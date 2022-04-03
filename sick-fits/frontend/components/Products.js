import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  useQuery(ALL_PRODUCTS_QUERY);
  return (
    <div>
      <p>Products!</p>
    </div>
  );
}

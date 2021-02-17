import gql from "graphql-tag";
const TITLE_QUERY = gql`
  query {
    welcomes {
      id
      hero
    }
  }
`;
export default TITLE_QUERY;
import gql from "graphql-tag";
const TITLE_QUERY = gql`
  query {
    welcomes {
      id
      hero
      herobutton
    }
  }
`;
export default TITLE_QUERY;
import gql from 'graphql-tag';

export const GET_ALL_PROJECTS = gql`
  query getProjects {
    jobs {
      id
      name
      deadline_at
    }
  }
`;

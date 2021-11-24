/* eslint-disable import/prefer-default-export */
export const simplifyRepos = (repos) => (
  repos.map(
    (repo) => ({
      id: repo.id,
      title: repo.title,
      overview: repo.overview,
      poster_path: repo.poster_path,
    }),
  )
);

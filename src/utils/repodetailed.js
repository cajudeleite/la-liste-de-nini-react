export const simplifyRepoDetailed = (repos) => (
  repos.map(
    (repo) => ({
      id: repo.id,
      title: repo.title,
      overview: repo.overview,
      poster_path: repo.poster_path,
      homepage: repo.homepage,
    }),
  )
);

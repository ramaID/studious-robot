module.exports = {
  siteMetadata: {
    title: 'code-note',
    description: `Just another developer note`,
    author: 'ramageek',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: false,
        showDate: false,
        // gitRepoContentPath: 'https://github.com/mrmartineau/gatsby-starter-code-notes/tree/master/notes',
        openSearch: {
          siteShortName: `Code Note`,
          siteUrl: 'https://laravolt.club',
          siteTags: 'code',
          siteContact: 'https://twitter.com/ramageek',
          siteDescription:
            'Code Notes',
        },
      },
    },
  ],
}

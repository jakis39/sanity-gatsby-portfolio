export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6041a42ff4075c4db027a35d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7oakm2p3',
                  apiId: '81d4332d-2057-4cc6-b944-16b851517a0c'
                },
                {
                  buildHookId: '6041a42fe440544ba5eb9dc2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6so9uxyk',
                  apiId: 'e984358b-6343-4172-972e-4ff70ffaf9a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakis39/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6so9uxyk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

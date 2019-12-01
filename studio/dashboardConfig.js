export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5de3f02c12b41df9207d6a8c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xt48h35p',
                  apiId: 'c55021e7-8e63-4d2b-af6b-f12b88f485b2'
                },
                {
                  buildHookId: '5de3f02c85e199ba198175e4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rffivapg',
                  apiId: '9d2eec10-19b7-4d82-820a-c965e0ab7a93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndrewCull/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rffivapg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

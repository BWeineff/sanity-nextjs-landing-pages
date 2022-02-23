export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62163d057468243aee22630e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-krrry5r8',
                  apiId: '0e92b8b3-dab7-4642-9833-6177b7581432'
                },
                {
                  buildHookId: '62163d05f6dca700c50cfcb4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6sfvrmsx',
                  apiId: '64ffb534-0bbd-4d58-8fa0-3428da0930bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BWeineff/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6sfvrmsx.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

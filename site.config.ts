import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '19240ad369648021994deab8af3308e5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yerim-DevNote',
  domain: 'yerim-devnote.vercel.app',
  author: 'Yerim',

  // open graph metadata (optional)
  description: 'Yerim DevNote - The place where I share my knowledge and experience',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'yrc00',
  linkedin: '예림-최-4623882b5',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/attachment%3A15aec9b7-d613-49bd-9f02-c4102bba1bd8%3Aavatar_small.png?table=block&id=19240ad3-6964-8021-994d-eab8af3308e5&spaceId=74d72aed-20c7-4845-8ef9-3da7107fec1e&width=250&userId=696885ec-a140-4fc8-8aee-69a463094eae&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '19240ad3696480998785f0b1ffd527a7'
    },
    {
      title: 'CV',
      pageId: '19240ad3696480d8bd4ef4017284eb9e'
    },
    {
      title: 'Category',
      pageId: '19240ad369648002a8dbd058c0960c3d'
    }
  ]
})

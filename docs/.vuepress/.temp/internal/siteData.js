export const siteData = {
  "base": "/monster-note/",
  "lang": "en-US",
  "title": "Monster知识体系",
  "description": "包括但不限于前端知识",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/assets/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

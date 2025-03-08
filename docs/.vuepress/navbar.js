import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'ci:house-02' },
  { text: '博客', link: '/blog/', icon: 'bx:book-bookmark' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  { text: '歌词', link: '/lyrics/', icon: 'bx:music' },
  { text: '友链', link: '/friends/', icon: 'la:user-friends' },

  {
    text: '笔记', icon:'hugeicons:note',
    items: [{ text: '示例', link: '/notes/demo/README.md',icon: 'fluent:book-question-mark-rtl-24-regular' },
      { text: 'Java', link: '/notes/Java/README.md', icon: 'fluent:document-java-16-regular' },
      { text: 'C#', link: '/notes/CSharp/README.md', icon: 'mdi:language-csharp' },
      { text: 'C', link: '/notes/C/README.md', icon: 'mdi:alpha-c-circle-outline'}]
  },
])

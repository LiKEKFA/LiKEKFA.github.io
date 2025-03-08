import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const lyrics = defineNoteConfig({
  dir: 'lyrics',
  link: '/lyrics',
  sidebar: 'auto',
})

const C = defineNoteConfig({
  dir: 'C',
  link: '/CNotes',
  sidebar: 'auto',
})

const CSharp = defineNoteConfig({
  dir: 'C#',
  link: '/CSharpNotes',
  sidebar: 'auto',
})

const Java = defineNoteConfig({
  dir: 'Java',
  link: '/JavaNotes',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, lyrics, C, CSharp, Java],
})

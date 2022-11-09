import candidates from './data/candidates.json'
import academicTitles from './data/academicTitles.json'

// DON'T FORGET TO USE GIT

const isAcademic = (title) => academicTitles.includes(title)
const titlesCompare = (c1, c2) => c2.titles.length - c1.titles.length

const getSmartest = (candidates) => {
  const sorted = candidates
    .map((cand) => ({ ...cand, titles: cand.titles.filter(isAcademic) }))
    .sort(titlesCompare)
  const smartest = sorted[0]
  return `${smartest.titles.join(' ')} ${smartest.name}`
}

getSmartest(candidates) /*?*/

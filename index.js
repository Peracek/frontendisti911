import candidates from './data/candidates.json'
import academicTitles from './data/academicTitles.json'

// DON'T FORGET TO USE GIT

const isAcademic = (title) => academicTitles.includes(title)

const getSmartest = (candidates) => {
  let smartest = candidates[0]

  for (const candidate of candidates) {
    if (candidate.titles.filter(isAcademic).length > smartest.titles.filter(isAcademic).length) {
      smartest = candidate
    }
  }

  return `${smartest.titles.join(' ')} ${smartest.name}`
}

getSmartest(candidates) /*?*/

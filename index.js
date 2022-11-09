import * as R from 'ramda'
import candidates from './data/candidates.json'
import academicTitles from './data/academicTitles.json'

// DON'T FORGET TO USE GIT

const isAcademic = (title) => academicTitles.includes(title)
const titlesCompare = R.descend(R.path(['titles', 'length']))
const format = (candidate) => `${candidate.titles.join(' ')} ${candidate.name}`

const getSmartest = R.pipe(
  R.map((cand) => R.evolve({ titles: R.filter(isAcademic) }, cand)),
  R.sort(titlesCompare),
  R.head,
  format
)

getSmartest(candidates) /*?*/

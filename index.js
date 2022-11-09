import * as R from 'ramda'
import candidates from './data/candidates.json'
import academicTitles from './data/academicTitles.json'

// DON'T FORGET TO USE GIT

const isAcademic = (title) => academicTitles.includes(title)
const titlesCompare = R.descend(R.path(['titles', 'length']))
const format = (candidate, opts) =>
  `${opts.showTitles ? candidate.titles.join(' ') : ''} ${candidate.name}`
const formatCurried = R.curry(R.flip(format))

const getSmartest = R.pipe(
  R.map(R.evolve({ titles: R.filter(isAcademic) })),
  R.sort(titlesCompare),
  R.head,
  formatCurried({ showTitles: false })
)

getSmartest(candidates) /*?*/

// THIS IS CURRYING
// R.sort(titlesCompare, candidates)
// R.sort(titlesCompare)(candidates)

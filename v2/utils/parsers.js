const filterParams = function (filterString) {
  return filterString.split(',').map((v, i) => v.split(':'))
    .reduce((accumulated, curr) => {
      return {
        ...accumulated,
        [curr[0]]: new RegExp(curr[1], 'i')
      }
    }, {})
}

const includeParams = function (includeString) {
  return includeString.split(',').join(' ')
}

module.exports = { filterParams, includeParams }

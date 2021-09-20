const prettierConfigStandard = require('prettier-config-standard')

const custom = {
  arrowParens: false,
  semi: false
}

const config = { ...prettierConfigStandard, ...custom }

module.exports = config

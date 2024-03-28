function isValidURL(url) {
  // Regular expression for a URL
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

  // Test the given string against the regular expression
  return urlRegex.test(url)
}

module.exports = {
  friendlyName: 'View',

  description: 'View home.',

  inputs: {
    url: {
      type: 'string'
      // isURL: true
    }
  },

  exits: {
    success: {
      responseType: 'inertia'
    },
    noURL: {
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
    const baseUrl = inputs.url

    if (!baseUrl) {
      return exits.noURL('/')
    }

    const isUrl = isValidURL(baseUrl)

    if (!isUrl) {
      this.req.flash('error', 'The value passed is not a url')
      return exits.noURL('/')
    }

    const page = await fetch(baseUrl, { timeout: 3000 })
    const htmlPage = await page.text()

    // All done.
    return exits.success({ page: 'view', props: { baseUrl, htmlPage } })
  }
}

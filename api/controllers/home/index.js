module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    const page = await fetch('https://clenny.tech')

    const htmlText = await page.text()

    return { page: 'index', props: { htmlText } }
  }
}

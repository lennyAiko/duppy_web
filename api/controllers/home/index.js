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
    var page
    const maxRetries = 3
    let retries = 0

    async function fetchData() {
      try {
        page = await fetch('https://lendocredit.com')
      } catch (error) {
        if (retries < maxRetries) {
          retries++
          await fetchData()
        } else {
          sails.log(error)
        }
      }
    }

    try {
      await fetchData()
    } catch (error) {
      sails.log('Error fetching data:', error)
    }

    const htmlText = await page.text()

    return {
      page: 'index',
      props: { htmlText, baseUrl: 'https://clenny.tech' }
    }
  }
}

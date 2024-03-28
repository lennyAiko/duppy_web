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
    const getPage = await fetch('https://google.com')

    console.log(await getPage())

    return {
      page: 'index'
    }
  }
}

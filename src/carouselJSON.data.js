const carouselDataExp236 = (function () {
  return {
    init: function () {
      this.doCards()
    },

    sparkCards: [
      {
        heading: 'SPARKS123-TEST-123',
        type: 'viewBag',
        footer: 'View bag',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_5005D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Your recent order',
        type: 'viewOrder',
        footer: 'View order',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_2002D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Recently viewed',
        type: 'seeAll',
        footer: 'See all',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_5481D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },

      {
        heading: 'Duck Feather',
        type: 'viewBag',
        footer: 'View bag',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_2002D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Your recent order',
        type: 'viewOrder',
        footer: 'View order',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_5005D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Recently viewed',
        type: 'seeAll',
        footer: 'See all',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_5481D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Duck Feather',
        type: 'viewBag',
        footer: 'View bag',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_2002D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Your recent order',
        type: 'viewOrder',
        footer: 'View order',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_5005D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      },
      {
        heading: 'Recently viewed',
        type: 'seeAll',
        footer: 'See all',
        image:
          '//asset1.marksandspencer.com/is/image/mands/PL_05_T35_5481D_Z0_X_EC_0?$PDP_REC_CAR_LG$',
        width: 94,
        height: 130
      }
    ],

    compileCards: function (cards) {
      const crds = document.createElement('div')
      let cardsContent = ''
      for (let c = 0; c < cards.length; c++) {
        cardsContent += '<div class="item" data-target="card">'
        cardsContent +=
          '<img width="' +
          parseInt(cards[c].width) +
          '" height="' +
          parseInt(cards[c].height) +
          '" src="' +
          cards[c].image +
          '"/>'

        cardsContent += `<p class="heading">${cards[c].footer}</p></section>`
        cardsContent += '</div>'
      }
      crds.innerHTML = cardsContent
      return crds
    },

    doCards: function () {
      const spcrds = this.sparkCards
      new Promise(resolve => {
        resolve(this.compileCards(spcrds))
      }).then(data => {
        const compcards = data

        if (document.getElementById('content')) {
          document
            .querySelector('#content')
            .insertAdjacentHTML('beforeend', compcards.innerHTML)
        }
      })
    }
  }
})()

carouselDataExp236.init()

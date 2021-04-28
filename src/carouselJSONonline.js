const closCarousel = (function () {
  const getHandle = function () {
    if (document.querySelector('.main-container2') !== null) {
      return document.querySelector('.main-container2')
    } else if (document.querySelector('.container2') !== null) {
      return document.querySelector('.container2')
    } else if (document.querySelector('.full-width-container2') !== null) {
      return document.querySelector('.full-width-container2')
    } else if (window.location.pathname.indexOf('l') === 1) {
      return document.querySelector('.container2')
    }
  }

  const mainStyles = `
    .welcome--message {
         width: 100%;
         display: flex;
         margin: 0.3rem 0 0 0;
         justify-content: flex-start;
    }
     .welcome--message p {
         margin: 0;
         margin-left: 6.50vw;
    }
     .text-container {
         margin: 0 auto;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
    }
     .carousel__wrapper.hidden {
         visibility: hidden;
    }
     .carousel__wrapper {
         transition: all 0.45s linear 150ms;
         width: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         background-color: #f2f2f2;
         position: relative;
    }
     .carousel__wrapper .carousel--container {
         height: 304px;
         position: relative;
         max-width: 1280px;
         overflow: hidden;
         margin: auto;
         display: flex;
         flex-direction: column;
         width: 100%;
         justify-content: center;
    }
     .carousel__button-wrapper {
         width: 100%;
         max-width: 1005px;
         margin: 0 auto;
         height: 0;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
    }
     .carousel__inner-wrapper {
         height: 304px;
         width: 100%;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         align-items: center;
         justify-content: space-between;
    }
     .carousel {
         margin: 0;
         list-style: none;
         width: 100%;
         display: flex;
         padding: 10px 10px 10px 14px;
         margin-left: 5.5vw;
         transition: all 1s ease;
    }
     .card {
         flex-direction: column;
         display: flex;
         justify-content: flex-start;
         align-items: center;
         margin-right: 16px;
         padding: 21px 30px 8.53px 30px;
         background-color: #ffffff;
         border-radius: 8px;
         box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
    }
     .card img {
         padding: 0;
         width: 94px;
         height: auto;
         text-align: center;
         background: radial-gradient(#9ecbef, transparent);
    }
     .card img::before {
         content: 'image goes here';
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         position: absolute;
         width: 90px;
         height: 120px;
         color: #394043;
         font-size: 12px;
    }
     .card footer img {
         width: 20px;
         height: auto;
         padding: 0;
    }
     button.carousel--button.hide {
         visibility: hidden;
    }
    button.carousel--button {
        transform: translate(5px, -15vh);
        border: none;
        width: 56px;
        height: 56px;
        position: absolute;
        background: #f6f6f6;
    }

    button.carousel--button:last-child,button.carousel--button:first-child {
     top: calc(50% + 13vh);
    }

     button.carousel--button:last-child {
         transition: all .3s linear 0ms;
         position: absolute;
         right: 9vw;
         z-index: 99;
    }

     button.carousel--button svg {
         cursor: pointer;
         border: none;
         width: 40px;
         height: 40px;
    }

    button.carousel--button:first-child svg {
         transform: rotate(180deg);
    }


     button.carousel--button:focus {
         outline: none;
         box-shadow: none;
    }

     .carousel__footer {
         display: flex;
         width: 100%;
         margin: 0;
         justify-content: space-around;
    }
     .carousel__footer p {
         font-size: 1.4rem;
         margin: 0;
    }
     .carousel__footer img {
         margin-left: 10px;
    }
     .page__site-stripe {
         margin-bottom: 0 !important;
         padding: 0;
    }
     .promo-strip {
         padding: .3rem 0;
    }

    .carousel__dots {
        transition: margin .3s linear 0ms;
    display: flex;
        width: 150px;
        justify-content: center;
        align-items:initial;
        flex-wrap: nowrap;
        height: 55px;
        margin-top: -10px;
    }

    .carousel__dots .visuallyhidden {
    border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .carousel--dot {
        background-color: transparent;
    border-radius: 2.5rem;
            cursor: default;
            display: inline-block;
    }



    .carousel--dot span {
    height: .5rem;
        width: .5rem;
        margin: .8rem;
        border-radius: 0.5rem;
        display: inline-block;
        background-color: #ddd;
    }

    .carousel--dot spa.sele {
    background-color: #000;
    }

    .carousel--dot span.page {
    cursor: pointer;
    }

    @media only screen and (min-width: 1420px) {
        .carousel__wrapper button.carousel--button:last-child {
          transition: all .3s linear 0ms;
          right: 5vw;
          position: absolute;
        }
      }


    @media only screen and (min-width: 1025px) {
    .carousel__wrapper .carousel {
    margin-left: 9.5vw;
    }
    .welcome--message p {
    margin-left: 10.5vw;
    }
    button.carousel-button:last-child {
    right: 13vw;
    }

    .carousel--dot span {
    height: .8rem;
        width: .8rem;
        margin: .8rem;
        border-radius: 2.5rem;
        display: inline-block;
        background-color: #ddd;
    }

    .carousel--container .carousel__dots {
            transition: margin .3s linear 0ms;
    margin-top: 47px;
    }


    }


    @media only screen and (max-width:1024px) {
         .carousel__wrapper button.carousel--button {
             visibility: hidden;
             display: none;
        }
         .carousel__wrapper button.carousel--button:first-child {
             visibility: hidden;
        }
         .carousel__wrapper button.carousel--button:last-child {
             visibility: hidden;
        }

        .carousel--container .carousel--dots {
            transition: margin .3s linear 0ms;
    margin-top: -10px;
    }

        .carousel__wrapper {
             display: flex;
             width: 100%;
             flex-wrap: wrap;
             height: 100%;
             flex-direction: row;

        }

        .carousel__wrapper .carousel--container {
             height: auto;
             width: 100%;
             display: flex;
             overflow: hidden;
             flex-direction: row;
             flex-wrap: wrap;
        }
         .carousel__wrapper ul.carousel::-webkit-scrollbar {
            /*hide chrome safari opera*/
             display: none;
        }
         .carousel__wrapper ul.carousel {
            /*ie edge firefox */
             -ms-overflow-style: none;
             scrollbar-width: none;
            /* Firefox */
        }
         .carousel__wrapper ul.carousel {
             margin: 0;
        list-style: none;
        min-width: 100%;
        display: flex;
        flex-wrap: nowrap;
        padding: 8px 0 10px 16px;
        margin-bottom: 3rem;
        overflow-x: scroll;
        transition: all 1s ease;
        }


         ul.carousel .card {
             flex-direction: column;
             display: flex;
             max-width: 154px;
             justify-content: flex-start;
             z-index:99;
             align-items: center;
             margin-right: 16px;
             padding: 24px 30px 16px 30px;
             background-color: #ffffff;
             border-radius: 8px;
             box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
        }

        ul.carousel .card:last-child {
            max-width: 153px;
            border-right: 1px solid #e9e5e5;

        }


         .carousel__footer {
             display: flex;
             width: 100%;
             margin: 2px auto 4px;
             justify-content: space-around;
        }
         .carousel__footer p {
             font-size: 1.4rem;
             margin: 0;
        }
         .card img {
             padding: 7px;
        }




         .carousel__wrapper .welcome--message {
             display: flex;
        margin: 16px 0 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        }
         .welcome--message p {
             margin: 0;
        font-size: 18px;
        font-family: MS London eText Demibold;
        line-height: 40px;
        font-weight: normal;
        text-align: left;
        color: #000;
        margin-left: 14px;
        }

    }




    @media only screen and (max-width: 736px) {
    header section#progressiveHeaderSection, header section {
           height: 12.3rem;
    }

        }


      `

  return {
    addCSS: function (css) {
      const head = document.getElementsByTagName('head')[0]
      const s = document.createElement('style')
      s.setAttribute('type', 'text/css')
      s.appendChild(document.createTextNode(css))
      head.appendChild(s)
    },

    doSparkOptions: function (options) {
      console.log(options)
      const visgret = document.getElementById('visitor__greed')

      const { visitorGreet, visitorName } = options
      const visitNGreet = visitorGreet + ' ' + visitorName
      visgret.textContent = visitNGreet
    },

    init: function () {
      this.doCarouselFirstAct()
      this.doCarouselSecondAct()
    },

    removeHidden: function () {
      const hd = document.querySelector('.carousel__wrapper')
      if (hd.classList.contains('hidden')) {
        return hd.classList.remove('hidden')
      }
    },

    doCarouselSecondAct: function () {
      const carousel = document.querySelector("[data-target='carousel']")
      const card = carousel.querySelector("[data-target='card']")
      const leftButton = document.querySelector("[data-action='slideLeft']")
      const rightButton = document.querySelector("[data-action='slideRight']")

      // Limit how far for carousel to go 1200
      const carouselWidth = carousel.offsetWidth
      console.log('carouselWidth is ', carouselWidth)

      const cardStyle = card.currentStyle || window.getComputedStyle(card)

      const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0])
      console.log('cardMarginRight is ', cardMarginRight)

      // total num of cards 18
      const cardCount = carousel.querySelectorAll("[data-target='card']").length
      console.log('cardCount is ', cardCount)

      // cardWidth. 154px

      const cardWidth = card.offsetWidth
      console.log(cardWidth)

      let offset = 0

      const maxX = cardCount * cardWidth + cardMarginRight

      if (offset === 0) {
        // initial pos
        leftButton.classList.add('hide')
        rightButton.classList.remove('hide')
      }

      function doArrows (os) {
        console.log('what is ', os)
        const rx = -os
        if (os < 0) {
          leftButton.classList.remove('hide')
          rightButton.classList.add('hide')
        } else if (os >= 0) {
          leftButton.classList.add('hide')
          rightButton.classList.remove('hide')
        }

        if (rx >= maxX) rightButton.classList.add('hide')
        if (rx <= maxX) rightButton.classList.remove('hide')
      }

      // click events
      leftButton.addEventListener('click', function () {
        if (offset !== 0) {
          offset += cardWidth * 8 + cardMarginRight
          console.log('offset is ', offset)

          carousel.style.transform = 'translateX(' + offset + 'px' + ')'
        }

        if (window.innerWidth >= 1025) {
          doArrows(offset)
        }
      })

      rightButton.addEventListener('click', function () {
        if (offset > -maxX) {
          offset -= cardWidth * 8 + cardMarginRight
          console.log('offset is ', offset)

          carousel.style.transform = 'translateX(' + offset + 'px' + ')'
        }

        if (window.innerWidth >= 1025) {
          doArrows(offset)
        }
      })
    },

    doCarouselFirstAct: function () {
      this.addCSS(mainStyles)
      const cat = getHandle()

      const carsl = document.createElement('div')
      carsl.className = 'carousel__wrapper'
      carsl.innerHTML = `
            <div class="carousel--container"> <div class="welcome--message">
                <p id="visitor__greed">

                </p>
            </div>
            <ul id="lacarouselle" class="carousel" data-target="carousel">

               <li class="card" data-target="card">
                    <img width="94" height="130" src=""/>
                    <section class="carousel__footer">
                    <p>Buy again</p>
                    <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"> <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" transform: translateY(2px)/>
                    </svg>
                    </section>
                </li>



            </ul>



            <div class="carousel__button-wrapper">
                <div class="carousel__inner-wrapper">
                    <button class="carousel--button" data-action="slideLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="none" border="none" stroke="#333" d="M16 11l9 9-9 9"/></svg>
                    </button>
                    <button class="carousel--button" data-action="slideRight">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="none" stroke="#333" d="M16 11l9 9-9 9"/></svg>
                    </button>
                </div>

                <div class="carousel__dots">
                   <a class="carousel--dot">
                     <span class="visuallyhidden">Slide 1</span>
                     <span class="page"> </span>
                   </a>
                   <a class="carousel--dot sele">
                      <span class="visuallyhidden">Slide 2</span>
                      <span class="page"></span>
                      <span class="visuallyhidden">(Current Slide) </span>
                   </a> <a class="carousel--dot">
                      <span class="visuallyhidden">Slide 3 </span>
                      <span class="page"> </span>
                   </a>
                </div>
           </div>`

      cat.parentElement.insertBefore(carsl, cat)
      console.log('\n\n cat is \n\n', cat)
    }
  }
})()

window.addEventListener(
  'resize',
  function () {
    closurObj.init()
    document.body.scrollTop()
  },
  false
)

window.addEventListener('load', function () {
  closCarousel.init()

  function getGreet () {
    const greet = document.getElementById('helloText')
    return greet.textContent.trim()
  }

  const sparkCards = [
    {
      heading: 'Duck Feather',
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
  ]

  function getCookie (cname) {
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        const result = c.substring(name.length, c.length)
        const output = result.slice(0, result.indexOf(' ') + 2)
        return output
      }
    }
  }

  function compileCards (cards) {
    let crds = document.createElement('div')
    crds.innerHTmL = ''
    for (let c = 0; c < cards.length; c++) {
      crds += '<li class="card" data-target="card">'
      crds +=
        '<img width="' +
        parseInt(cards[c].width) +
        '" height="' +
        parseInt(cards[c].height) +
        '" src="' +
        cards[c].image +
        '"/>'

      crds += ` <section class="carousel__footer">
          <p>${cards[c].footer}</p>
          <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" ></path>
          </svg>
        </section>`
      crds += '</li>'
    }

    return crds
  }

  function doCards () {
    const spcrds = sparkCards
    const data = compileCards(spcrds)
    new Promise(resolve => {
      resolve(compileCards(spcrds))
    }).then(data => {
      // console.log('promise data is ',data);

      if (document.getElementById('lacarouselle')) {
        const cars = document.getElementById('lacarouselle')
        const ckndat = data.replace(/\[.*?\]/, '').trim()

        cars.innerHTML = `${ckndat} <iframe style="margin-right:0px;
                border-width:1px; overflow: hidden;
                visibility: hidden; max-width: 0;" srcdoc='<div style="width:0px; border-width: 0px;"></div>'></iframe>`
      }
    })
  }

  const sparksOptions = {
    // allOffers: allSparks(),
    cards: doCards(),
    visitorName:
      getCookie('MS_USER_COOKIE_10151') || 'Not available (see status)',
    visitorGreet: getGreet(),

    // visitorStatus
    other: {
      visitorStatus:
        !!this.visitorName && this.visitorName !== undefined
          ? 'signed-in'
          : 'signed-out'
    }
  }

  //  if (!document.cookie.indexOf('MS_USER_COOKIE_10151') > -1) {
  //     let {other: { visitorStatus }} = sparksOptions;

  //     //closurObj.addBanner(sparksOptions)
  //     closCarousel.doSparkOptions(sparksOptions);

  //     if (!window.localStorage.getItem('sparksOptions') >= -1 &&
  //         visitorStatus !== 'signed-out') {
  //             window.localStorage.setItem('sparksOptions',JSON.stringify(sparksOptions))
  //             visitorStatus = 'signed-out';
  //     }

  // }
})

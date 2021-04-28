function externalScripts () {
  const scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js'
  ]
  let src, script
  const firstScript = document.scripts[0]
  while ((src = scripts.shift())) {
    if ('async' in firstScript) {
      script = document.createElement('script')
      script.async = false
      script.src = src
      document.head.appendChild(script)
    }
  }
}
externalScripts()

const closCarousel236 = (function () {
  let index = -1

  const getHandle = function () {
    if (document.querySelector('.main-container') !== null) {
      return document.querySelector('.main-container')
    } else if (document.querySelector('.container') !== null) {
      return document.querySelector('.container')
    } else if (document.querySelector('.full-width-container') !== null) {
      return document.querySelector('.full-width-container')
    } else if (window.location.pathname.indexOf('l') === 1) {
      return document.querySelector('.container')
    }
  }

  const mainStyles = `

     .main-wrapper--exp236 {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 170px;
  background-color: #F1EDEC;
  width: 100%;
 }

 #main-wrapper--exp236 {
box-sizing: border-box;
background-color: transparent;
width: 100%;
max-width: 1280px;
display: flex;
justify-content: center;

}

#carousel--wrapper {
width: 90%;
margin-left: 10%;
position: relative;
padding-top: 60px;
    padding-bottom: 33px;
    background: #F1EDEC;
}

#carousel--container {
  margin-top: 60px;
  margin-bottom: 33px;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin: 0 16px;
  -ms-overflow-style: none;  /* IE and Edge */
 scrollbar-width: none;  /* Firefox */
}

#carousel--container::-webkit-scrollbar {
display: none;
height: 0;

}

#carousel--wrapper button#prev:focus,#carousel--wrapper button#next:focus {
outline: none;
box-shadow: none;
}

#carousel--wrapper .carousel__dots {
transition: all linear .4s 500ms;
transition: margin .3s linear 0ms;
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: initial;
    flex-wrap: wrap;
    height: 20px;
    margin-top: 7px;
    left: 0%;
    position: absolute;
}

#carousel--wrapper .carousel--dot {
background-color: transparent;
    cursor: pointer;
    display: inline-block;
    height: 25px;
}



#carousel--wrapper .carousel__dots .carousel--dot.dot--active span {
transition: all linear .55s 0.5s;
background-color: rgb(0 0 0 / 27%);
}

#carousel--wrapper .carousel__dots .carousel--dot.dot--active:nth-of-type(1) {
animation-name: fader;
    animation-delay: 3s;
    animation-duration: 1s;
    z-index: 20;
}

#carousel--wrapper .carousel__dots .carousel--dot.dot--active:nth-of-type(2) {
animation-name: fader;
    animation-delay: 3s;
    animation-duration: 1s;
 z-index: 10;
}

#carousel--wrapper .carousel__dots .carousel--dot.dot--active:nth-of-type(n+3) {
animation-name: fader;
    animation-delay: 3s;
    animation-duration: 1s;

}

@keyframes fader {
    from { opacity: 1.0; transform: translateX(10%) }
    to   { opacity: 0.0; }
 }



#prev,
#next {
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  border: none;
  padding: 1px;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  background-color: hsl(0deg 0% 96% / 55%);
}

#prev {
  top: 57%;
  left: 0;
  left: -75px;
  transform: translate(50%, -50%) rotate(180deg);
  display: none;
}

#next {
  top: 57%;
  right: 16%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 1024px) {
.main-wrapper--exp236 #prev, .main-wrapper--exp236 #next {
display: none !important;
}
#main-wrapper--exp236 #carousel--wrapper {
width: 100%;
margin-left: 0;
}
#main-wrapper--exp236 #carousel--wrapper .carousel__dots {
width: 100%;
}
}

button svg {
width: 35px;
    height: 40px;
    fill: #19322F;
}

#content {
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
  margin: auto;
  box-sizing: border-box;
  position: relative;
}

.account--holder__greet {
display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
}

.account--holder__greet p {
margin: 0;
}

.item {
  width: 300px;
  border-radius: 8px;
  height: 77px;
  background: #fff;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.item img {
margin: 13px 7px 0px 16px;
    max-width: 90px;
    height: auto;
    mix-blend-mode: multiply;
}

.item .heading {
width: 144px;
height: 40px;
margin: 0;
}

.item p.heading {
font-family: 'MS London eText Semibold';
font-weight: normal;
color: rgb(0,0,0);
letter-spacing:0;
font-size: 14px;
line-height:20px;
text-align: left;
margin-top: 19px;
margin-bottom: 17px;
position:relative;

}

.item p.heading::after {
content: '🎉';
    position: absolute;
    letter-spacing: 0;
    line-height: 21px;
    font-size: 14px;
    right: 33px;
}`

  return {
    addCSS: function (css) {
      const head = document.getElementsByTagName('head')[0]
      const s = document.createElement('style')
      s.setAttribute('type', 'text/css')
      s.appendChild(document.createTextNode(css))
      head.appendChild(s)
    },

    init: function () {
      // debugger;
      this.doCarouselFirstAct()
      this.doCarouselSecondAct()
    },

    doDots: function (d) {
      index += d
      const slides = document.querySelectorAll(
        '#main-wrapper--exp236 #content .item'
      )
      const dots = [
        ...document.querySelectorAll('#main-wrapper--exp236 .carousel__dots')[0]
          .children
      ]
      console.log(dots)
      const opacity = slides.length / 3
      const da = Array.from(dots)

      if (index > slides.length - 1) index = 0
      const ds = document.querySelectorAll('.carousel__dots')[0]

      dots.forEach((dot, i) => {
        if (dot.classList.contains('dot--active'))
          dot.classList.remove('dot--active')

        if (i === index) {
          dot.classList.add('dot--active')
        }
      })
    },

    doCarouselSecondAct: function () {
      const gap = 16

      const carousel = document.getElementById('carousel--container')
      const content = document.getElementById('content')
      const next = document.getElementById('next')
      const prev = document.getElementById('prev')

      next.addEventListener('click', e => {
        carousel.scrollBy(width + gap, 0)
        carousel.scrollTop
        if (carousel.scrollWidth !== 0 && window.innerWidth > 1024) {
          prev.style.display = 'flex'
          closCarousel236.doDots(+1)
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = 'none'
          closCarousel236.doDots(0)
        }
      })
      prev.addEventListener('click', e => {
        carousel.scrollBy(-(width + gap), 0)
        if (carousel.scrollLeft - width - gap <= 0) {
          prev.style.display = 'none'
          closCarousel236.doDots(0)
        }
        if (
          !content.scrollWidth - width - gap <= carousel.scrollLeft + width &&
          window.innerWidth > 1024
        ) {
          next.style.display = 'flex'
          closCarousel236.doDots(-1)
        }
      })

      let width = carousel.offsetWidth
      window.addEventListener('resize', e => (width = carousel.offsetWidth))
    },

    doCarouselFirstAct: function () {
      // debugger;
      this.addCSS(mainStyles)
      const cat = getHandle()

      const carsl = document.createElement('div')
      carsl.className = 'main-wrapper--exp236'
      carsl.innerHTML = `
             <div id="main-wrapper--exp236">
    <div id="carousel--wrapper">
      <div id="carousel--container">
    <div class="account--holder__greet"><p></p></div>

        <div id="content">


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


         <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


         <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


         <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


         <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


       <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


       <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>



          <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


         <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


       <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


       <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>



           <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


         <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


       <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>


        <div class="item">
          <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" width="164" height="110" />
          <p class="heading">New Sparks offers waiting for you</p>
        </div>

      </div>



       <div class="carousel__dots">
        <a class="carousel--dot">
        <span class="visuallyhidden">Slide 1</span>
        <span class="page"> </span>
        </a>
        <a class="carousel--dot">
        <span class="visuallyhidden">Slide 2</span>
        <span class="page"></span>
        <span class="visuallyhidden">(Current Slide) </span>
            </a>
        <a class="carousel--dot">
        <span class="visuallyhidden">Slide 3 </span>
        <span class="page"> </span>
        </a>
      </div>





    </div>

    <button id="prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path fill="none" border="none" stroke="#333" d="M16 11l9 9-9 9"/>
        </svg>
    </button>

    <button id="next">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
       <path fill="none" stroke="#333" d="M16 11l9 9-9 9"/>
       </svg>
    </button>
 </div>
</div>
            `

      cat.parentElement.insertBefore(carsl, cat)
      console.log('\n\n cat is \n\n', cat)
      // debugger;
    },

    removeSiteStripe: function () {
      if (document.querySelector('.page__site-stripe')) {
        const stripe = document.querySelector('.page__site-stripe')
        stripe.style.marginDown = 0
      }
    },

    greetVisitor: function (sparkOptions) {
      const { visitorGreet, visitorName } = sparksOptions
      const visitNGreet = visitorGreet + ' ' + visitorName
      const greet = document.querySelector('.account--holder__greet')
      greet.textContent = visitNGreet
    }
  }
})()

window.addEventListener('resize', () => {
  const carslides = document.querySelectorAll(
    '#main-wrapper--exp236 #content .item'
  )
  carslides.scrollTop
})

window.addEventListener('load', function () {
  // debugger;
  closCarousel236.init()
  // closCarousel236.greetVisitor();

  const allSparks = function () {
    const data = {}
    if ('sparksSSO' in window.sessionStorage) {
      const session = JSON.parse(window.sessionStorage.getItem('sparksSSO'))
      data.addedOffers = session.totalAddedOffers
      data.allOffers = session.totalOffers
      data.newOffers = data.allOffers - data.addedOffers
      data.allCards = session.allOffers[0].offers
      return data
    }
  }

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

  function doCards () {
    new Promise(resolve => {
      resolve(compileCards(sparkCards))
    }).then(data => {
      if (document.getElementById('lacarouselle')) {
        const cars = document.getElementById('lacarouselle')
        carsInnner = cars.innerHTML = ''
        const ckndat = data.replace(/\[.*?\]/, '').trim()

        cars.innerHTML += `${ckndat} <iframe style="margin-right:0px;
            border-width:1px; overflow: hidden;
            visibility: hidden; max-width: 0;" srcdoc='<div style="width:0px; border-width: 0px;"></div>'></iframe>`
      }
    })
  }

  const doGreet = () => {
    // console.log(options);

    const greet = document.getElementById('helloText')
    greet.textContent.trim()
    console.log(greet)

    const visgret = document.getElementById('visitor__greed')
    const { visitorGreet, visitorName } = options
    const visitNGreet = visitorGreet + ' ' + visitorName
    visgret.textContent = visitNGreet
  }

  const sparksOptions = {
    allOffers: allSparks(),
    // cards: doCards(),
    visitorName:
      getCookie('MS_USER_COOKIE_10151') || 'Not available (see status)',
    // visitorGreet: doGreet(),

    // visitorStatus
    other: {
      visitorStatus:
        !!this.visitorName && this.visitorName !== undefined
          ? 'signed-in'
          : 'signed-out'
    }
  }

  console.log('\n\n sparksOptions Obj: ', sparksOptions, '\n\n')

  if (!document.cookie.indexOf('MS_USER_COOKIE_10151') > -1) {
    let {
      other: { visitorStatus }
    } = sparksOptions

    console.log(visitorStatus)
    // closurObj.addBanner(sparksOptions)

    // sparksOptions.visitorGreet = doGreet(sparksOptions);

    if (
      !window.localStorage.getItem('sparksOptions') >= -1 &&
      visitorStatus !== 'signed-out'
    ) {
      window.localStorage.setItem(
        'sparksOptions',
        JSON.stringify(sparksOptions)
      )
      visitorStatus = 'signed-out'
    }
  }

  function removeUserSparks () {
    let {
      other: { visitorStatus }
    } = sparksOptions

    window.localStorage.removeItem('sparksOptions')
    visitorStatus = 'signed-out'
    return visitorStatus
  }

  // only needed once per visit
  window.onbeforeunload = () => removeUserSparks()

  // function getCookie(cname) {
  //     const name = cname + '='
  //     const decodedCookie = decodeURIComponent(document.cookie)
  //     const ca = decodedCookie.split(';')
  //     for (let i = 0; i < ca.length; i++) {
  //         let c = ca[i]
  //         while (c.charAt(0) === ' ') {
  //             c = c.substring(1)
  //         }
  //         if (c.indexOf(name) === 0) {
  //             const result = c.substring(name.length, c.length)
  //             const output = result.slice(0, result.indexOf(' ') + 2)
  //             return output
  //         }
  //     }
  // }

  // const sparksOptions = {
  //     // allOffers: allSparks(),
  //     cards: doCards(),
  //     visitorName: getCookie('MS_USER_COOKIE_10151') || 'Not available (see status)',
  //     visitorGreet: getGreet(),

  //     //visitorStatus
  //     other: {
  //         visitorStatus:
  //             !!this.visitorName && this.visitorName !== undefined ? 'signed-in' : 'signed-out'
  //     }
  // };

  //  if (!document.cookie.indexOf('MS_USER_COOKIE_10151') > -1) {
  //     let {other: { visitorStatus }} = sparksOptions;

  //     //closurObj.addBanner(sparksOptions)
  //     closCarousel236.doSparkOptions(sparksOptions);

  //     if (!window.localStorage.getItem('sparksOptions') >= -1 &&
  //         visitorStatus !== 'signed-out') {
  //             window.localStorage.setItem('sparksOptions',JSON.stringify(sparksOptions))
  //             visitorStatus = 'signed-out';
  //     }

  // }
})

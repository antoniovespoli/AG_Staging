var homepage = Vue.component('homepage', {
    template: `
        <div>
        <div class="homepage">
            <div class="overlay"> </div>
            <div class="home-main-container">
            <img class="logo-header" src="logo.png">
            <h1> Home </h1>
            <events-list-container v-for="(section, index) in sections" :key="index" v-bind:events="section"> </events-list-container>
            </div>
        </div>
        <myfooter> </myfooter>
        </div>
    `,
    data() {
        return {
            sections: [
                {
                    listTitle: "Vicino a te",
                    events: [
                       {
                        id: 1,
                        title: "Title 1",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        },
                        {
                        id: 2,
                        title: "Title 2",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        },
                        {
                        id: 3,
                        title: "Title 3",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        }
                    ]
                },
                {
                    listTitle: "Questa sera",
                    events: [
                       {
                        id: 1,
                        title: "Title 1",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        },
                        {
                        id: 2,
                        title: "Title 2",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        },
                        {
                        id: 3,
                        title: "Title 3",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        }
                    ]
                },
                {
                    listTitle: "Domani sera",
                    events: [
                       {
                        id: 1,
                        title: "Title 1",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        },
                        {
                        id: 2,
                        title: "Title 2",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        },
                        {
                        id: 3,
                        title: "Title 3",
                        disco: "Disco",
                        city: "Modena",
                        tags: ["tecno", "hip hop", "dancehall"],
                        date: Date('1995-12-17T03:24:00')
                        }
                    ]
                }
            ]
        }
    }
});

Vue.component('events-list-container', {
    template: `
        <div class="events-list-container">
            <h2> {{ events.listTitle }} </h2>
            <tr-slide-in>
            <event-card v-for="(event, index) in events.events" :key="index" v-if="loaded" v-bind:event_small_specs="event" style="transition: 1s;"> </event-card>
            </tr-slide-in>
        </div>
    `,
    props: ['events'],
    data: function() {
        return{loaded:false}
    },
    mounted() {
        this.loaded = true
    }
});

var card = Vue.component('event-card', {
    template: `
        <router-link :to="'event/' + event_small_specs.id">
            <div class="event-card">
                <div class="event-card-top">
                    <img class="event-card-img" v-bind:src="'https://picsum.photos/820/462?image=' + event_small_specs.id">
                    <div class="date-preview"> 
                        <p> sab </p>
                        <h1> 31 </h1>
                        <p> mag </p>
                    </div>
                </div>
                <div class="event-tag" v-for="(tag, index) in event_small_specs.tags" :key="index"> <p> {{ tag.toUpperCase() }} </p> </div>
                <br> <br>
                <h2> {{ event_small_specs.title }} </h2>
                <div class="event-place">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3> {{ event_small_specs.disco + ", " + event_small_specs.city }} </h3>
                </div>
            </div>
        </router-link>
    `,
    props: ['event_small_specs']
});

var eventDetailsPage = Vue.component('event-details-page', {
    template: `
            <div class="event-details-page">
                <div class="event-details-header">
                    <div class="overlay-event-details-header">   </div>
                    <img v-bind:src="'https://picsum.photos/820/462?image=' + event_id">
                </div>
                <div class="main-container">
                    
                    <div class="event-details-header-title">
                        <h3> SABATO 31 MAGGIO </h3>
                        <h2> {{ event.title }} </h2>
                        <div class="event-place">
                            <i class="fas fa-map-marker-alt"></i>
                            <h3> {{ event.disco.name + ", " + event.disco.city}} </h3>
                        </div>
                        <div class="event-tag-container">
                            <div class="event-tag" v-for="(tag, index) in event.tags" :key="index"> <p> {{ tag.toUpperCase() }} </p> </div>
                        </div>
                    </div>

                    <div class="event-details-body">
                        <paragraph title="ORARI" v-bind:text=" fromto() "> </paragraph>
                        <paragraph title="DOOR POLICY" v-bind:text=" policy() "> </paragraph>
                        <paragraph title="DESCRIZIONE" v-bind:text=" event.description "> </paragraph>
                        <discocard v-bind:disco=" event.disco "> </discocard>
                         <div id="map"> 
                        </div>
                        
                    </div>
                </div>

                <myfooter> </myfooter>
            </div>
    `,
    props: ['event_id'],
    data() {
        return {
            event: {
                disco: {
                    name: "Club",
                    city: "Modena",
                    description: "The beauty of astronomy is that anybody can do it. From the tiniest baby to the most advanced astrophysicist, there is something for",
                    parking: true,
                    smoking_area: true,
                    wardrobe: true
                },
                title: "Make Grilling rem Experience",
                tags: ["tecno", "hip hop", "dancehall"],
                description: "The beauty of astronomy is that anybody can do it. From the tiniest baby to the most advanced astrophysicist, there is something for anyone who wants to enjoy astronomy. In fact, it is a science that is so accessible that virtually anybody can do it virtually anywhere they are. All they have to know how to do is to look up.",
            }
        }
    },
    methods: {
        fromto: function() {
            return "Dalle 20.00 alle 4.00";
        },
        policy: function() {
            return "+18 • Elegante";
        }
    }
});

Vue.component('paragraph', {
    template: `
        <div class="paragraph">
            <h3> {{ title }} </h3>
            <p> {{ text }} </p>
        </div>
    `,
    props: ['title', 'text']
});

Vue.component('discocard', {
    template: `
        <div class="disco-card">
            <div class="circle-tag">
                <h2> {{ disco.name[0] }} </h2>
            </div>
            <h2> {{ disco.name }} </h2>
            <div class="event-place">
                <i class="fas fa-map-marker-alt"></i>
                <h3> {{ disco.city }} </h3>
            </div>
            <p> {{ disco.description }} </p>
            <feature v-if="disco.parking" type="parking"> </feature>
            <feature v-if="disco.wardrobe" type="wardrobe"> </feature>
            <feature v-if="disco.smoking_area" type="smoking_area"> </feature>
        </div>
    `,
    props: ['disco']
});

Vue.component('feature', {
    template: `
        <div class="feature">
            <i v-bind:class="getIcon(type)"></i>
            <p> {{ getString(type) }} </p>
        </div>
    `,
    props: ['type'],
    methods: {
        getString: function(type) {
            switch(type) {
                case "parking": return "Parcheggio";
                case "smoking_area": return "Area Fumatori";
                case "wardrobe": return "Guardaroba";
                default: return "Error";
            }
        },
        getIcon: function(type) {
            switch(type) {
                case "parking": return "fas fa-car";
                case "smoking_area": return "fas fa-smoking";
                case "wardrobe": return "fas fa-tshirt";
                default: return "Error";
            }
        }
      }
});

Vue.component('myfooter', {
    template: `
        <div class="footer">
            <p> Made by Airglow © 2019 <br> All rights reserved</p>
        </div>
    `,
    props: ['type']
});

Vue.component('preference-selection', {
    template: `
        <div class="footer">
            <p> Made by Airglow © 2019 <br> All rights reserved</p>
        </div>
    `,
    props: ['type']
});

Vue.component('tr-slide-in', {
    template: `
        <transition-group tag="div" class="tr-slide-in"
    appear
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
    <slot></slot>
  </transition-group>
    `,
    props: {
        duration: {
          default: '1s'
        },
        stagger: {
          default: 0
        },
        settings: {
          default: function() {
            return {
              from: '-100%, 0%'
            }
          }
        }
      },
      data: function() {
        return {
          status: []
        }
      },
      methods: {
        beforeEnter: function(el) {
          el.targetTransition = 'transform'
          el.style.transition = this.duration
          if (el.dataset.from) {
            el.style.transform = 'translate(' + el.dataset.from + ')'
          } else {
            el.style.transform = 'translate(' + this.settings.from + ')'
          }
          el.end = function(e) {
            if (e.propertyName === el.targetTransition && e.target === el) {
              this.done()
              this.removeEventListener('transitionend', el.end)
            }
          }
        },
        enter: function(el, done) {
          el.style.transition = this.duration
          let delay = el.dataset.index * this.stagger
          el.done = done
          window.requestAnimationFrame(() => {
            setTimeout(() => {
              el.style.transform = 'translate(0, 0)'
              el.addEventListener('transitionend', el.end, false)
            }, delay)
          })
        },
        leave: function(el, done) {
          el.style.transition = this.duration
          let delay = el.dataset.index * this.stagger
          el.done = done
          window.requestAnimationFrame(() => {
            setTimeout(() => {
              if (el.dataset.from) {
                el.style.transform = 'translate(' + el.dataset.from + ')'
              } else {
                el.style.transform = 'translate(' + this.settings.from + ')'
              }
              el.addEventListener('transitionend', el.end, false)
            }, delay)
          })
        }
      }
})


const routes = [
    { path: '/home', component: homepage },
    { path: '/event/:event_id', component: eventDetailsPage, props: true}
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    el: "#app",
    router
});
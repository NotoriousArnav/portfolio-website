import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

/* add some pro styles */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { fad } from "@fortawesome/pro-duotone-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import router from './router'

library.add(faUserSecret, faTwitter, faInstagram, faEnvelope, faGithub, faBars)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

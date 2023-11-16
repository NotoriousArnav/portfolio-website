<template>
  <div class="grid sm:grid-cols-2 gap-2">
    <div>
      <img class="w-1/3" src="@/assets/profile-pic.png" >
      <h1 class="text-4xl sm:text-5xl">{{ msg }}</h1>
      <h2 class="text-3xl sm:text-4xl">Full Stack Developer</h2>
      <strong>See also</strong>
      <br>
      <div class="gap-4">
        <a class="text-xl text-blue-400 hover:underline transition" href="https://bromine.vercel.app/">Bromine</a> | 
        <a class="text-xl text-blue-400 hover:underline transition" href="https://pixelgen.netlify.app/">Pixel Art Generator</a> |
        <a class="text-xl text-blue-400 hover:underline transition" href="https://brocode-tech.netlify.app/">BroCode tech Community</a>
      </div>
      <br>
      <h3 class="text-xl">Skills</h3>
      <ul class="grid grid-cols-2 sm:grid-cols-3">
        <li>Communication</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Unix Shell</li>
        <li>Deployment</li>
        <li>Electronics</li>
        <h3 class="col-span-2 sm:col-span-3 text-xl">Things that I usually Use to get the Job done</h3>
        <li>Python</li>
        <li>JS</li>
        <li>Shell Scripting</li>
        <li>Django, Flask, Fast API</li>
        <li>VueJS</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
    <div>
      <h3 class="text-3xl">About me</h3>
      <p>
19-year-old BCA student at SIT, Sukna, navigating the tech world with Fedora and Arch Linux. Proficient in Python, JS, Bash, HTML, and CSS. Enthusiastic about building apps to simplify workflows and reduce workload. Join me on this tech journey! 🚀
      </p>
      <br>
      <p>
In my free time, I immerse myself in a symphony of hobbies. 🎶 Whether it's belting out tunes or creating melodies on my synth, music is my refuge. 🎹 I dabble in a bit of online exploration 🕵️‍♂️, find peace in sketching landscapes 🎨, and get my hands dirty with AI, building automation scripts to simplify tasks. 🤖 Each hobby adds a unique rhythm to my life!
      </p>
      <br>
      <ul>
        <h3 class="text-3xl">Socials</h3>
        <li class="text-lg" v-for="(item, index) in social_links" :key="index">
          <span class="">
            <!--<font-awesome-icon :icon="item.faUser"  />-->
            <a :href="item.link">
              <font-awesome-icon :icon="item.faClass" />
              {{ item.handle }}
            </a>
          </span>
        </li>
      </ul>
      <br>
      <p class="text-lg">Made with ❤️ using VueJS, Tailwind, Fontawesome and Netlify</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      social_links: [
        { platform:"GitHub", handle:"NotoriousArnav", link:"https://github.com/NotoriousArnav", faClass: ['fab', 'github']},
        { platform:"Email", handle:"Email", link:"mailto:justarnav2004@onmail.com", faClass: ['fas', 'envelope'] },
        { platform:"Twitter | X", handle: "@arnv2004", link: "https://twitter.com/arnv2004", faClass: ['fab', 'twitter'] },
        { platform:"BroCode Tech Community", handle: "BroCode Tech Community", link: "https://brocode-tech.netlify.app/", faClass: "" },
        { platform:"Intagram", handle: "@arnv2004", link: "https://instagram.com/arnv2004", faClass: ['fab', 'instagram'] }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


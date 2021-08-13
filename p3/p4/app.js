let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      url: 'http://www.youtube.com',
      classes: ['one', 'two'],
      wage:0,
      coords:{
        x:0,
        y:0
      },
      name: 'ashish',
      available: true,
      nearby: true
    },
    methods: {
      greet(time){
        return 'hello there ' +' ' +time;
      },
      changewage(amount){
        this.wage+= amount;
      },
      logevents(e){
        console.log(e)
      },
      logCoords(e){
        this.coords.x = e.offsetX
        this.coords.y = e.offsetY
      },
      updateName(e){
        this.name = e.target.value
      }
    }
  })

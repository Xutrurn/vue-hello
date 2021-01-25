// alert("Hello world");

// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

var app = new Vue({
  el: '#imageViewer',
  data: {
    messaggio: 'Background',
    source: 'https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg',
    altertext: 'Background',
    text: 'testo',
    img: 'immagine',
    mostraImmagine: true,
  },
  methods: {
    toggle: function() {
      this.mostraImmagine = !this.mostraImmagine;
      this.$refs.toggleTxt.innerText = this.mostraImmagine ? 'Nascondi immagine' : 'Mostra immagine';
    }
  },
});









// console.log();

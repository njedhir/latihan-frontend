const app = Vue.createApp({
  data() {
    return {
      daftarPeserta: [
        {
          nama: 'Robby',
          umur: 38
        },
        {
          nama: 'Ali',
          umur: 39
        },
        {
          nama: 'Ares',
          umur: 32
        },
        {
          nama: 'Ditto',
          umur: 31
        }
      ],
      pendaftaran: {
        nama: '',
        umur: null
      },
      jam: ''
    }
  },
  methods: {
    onKurangiClick() {
      this.daftarPeserta.pop()
    },
    onTambahClick() {
      this.daftarPeserta.push(
        JSON.parse(JSON.stringify(this.pendaftaran))
      )
      this.pendaftaran.nama = ''
      this.pendaftaran.umur = null
    },
    updateJam() {
      setInterval(() => {
        this.jam = Date()
      }, 1000)
    }
  },
  mounted() {
    this.updateJam()
  }
})

app.mount('#app')
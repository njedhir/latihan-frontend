const app = Vue.createApp({
  data() {
    return {
      players: [
        {
          name: '',
          placeholder: 'Pemain 1',
          score: 0,
          setRslt: [],
          serve: '-serve-'
        },
        {
          name: '',
          placeholder: 'Pemain 2',
          score: 0,
          setRslt: [],
          serve: '-'
        }
      ],
      serve: true
    }
  },
  methods: {
    onKurangClick(playerNumber) {
      if (this.players[playerNumber].score > 0) this.players[playerNumber].score--
    },
    onTambahClick(playerNumber) {
      this.players[playerNumber].score++
    },
    onGameSet() {
      this.players.forEach(player => {
        player.setRslt.push(player.score)
        player.score = 0
      })
    },
    onUndoGameSet() {
      this.players.forEach(player => {
        player.score = player.setRslt.slice(-1)[0]
        player.setRslt.pop()
      })
    },
    onChgServe() {
      this.players.forEach(player => {
        if (player.serve == '-serve-') {
          player.serve = '-'
        } else {
          player.serve = '-serve-'
        }
      })
    },
    onResetScore() {
      this.players.forEach(player => {
        player.score = 0
      })
    }
  }
})

app.mount('#app')
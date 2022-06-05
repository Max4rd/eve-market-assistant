import { Buffer } from 'buffer'
import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication',{
  state: () => {
    return {
      state: 'zebi',
      accessToken: '',
      refreshToken: '',
    }
  },

  actions: {
    authorize() {
      const url = new URL('https://login.eveonline.com/v2/oauth/authorize/')

      const esiScopes = [
        'esi-skills.read_skills.v1',
        'esi-markets.structure_markets.v1',
        'esi-location.read_online.v1',
        'esi-location.read_location.v1',
        'esi-ui.open_window.v1',
      ]
      const esiScopesString = esiScopes.join(' ')

      const params = new URLSearchParams({
        response_type: 'code',
        redirect_uri: process.env.VUE_APP_CALLBACK_URL,
        client_id: process.env.VUE_APP_CLIENT_ID,
        scope: esiScopesString,
        // TODO: make a random string
        state: this.state,
      })
      url.search = params.toString()

      window.location.href = url.toString()
    },

    async sendToken(code) {
      const url = new URL('https://login.eveonline.com/v2/oauth/token')

      const keys = [
        process.env.VUE_APP_CLIENT_ID,
        process.env.VUE_APP_SECRET_KEY,
      ]
      const credentials = Buffer.from(keys.join(':')).toString('base64')

      const headers = new Headers({
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'login.eveonline.com',
      })

      const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
      })

      const init = {
        method: 'POST',
        headers: headers,
        body: params.toString(),
      }

      const response = await fetch(url, init)
      console.log(response)
    },
  },
})

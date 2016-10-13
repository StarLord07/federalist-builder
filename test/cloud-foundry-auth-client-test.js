process.env.CLOUD_FOUNDRY_OAUTH_TOKEN_URL = "https://login.example.com/oauth/token"
process.env.DEPLOY_USER_USERNAME = "deploy_user"
process.env.DEPLOY_USER_PASSWORD = "deploy_pass"

const expect = require("chai").expect
const jwt = require("jsonwebtoken")
const nock = require("nock")
const CloudFoundryAuthClient = require("../src/cloud-foundry-auth-client")
const mockTokenRequest = require("./nocks/cloud-foundry-oauth-token-nock")

describe("CloudFoundryAuthClient", () => {
  describe(".accessToken()", () => {
    afterEach(() => nock.cleanAll())

    it("should fetch and resolve a new token if it has yet to fetch a token", done => {
      const accessToken = mockToken()
      mockTokenRequest(accessToken)

      const authClient = new CloudFoundryAuthClient()

      authClient.accessToken().then(token => {
        expect(token).to.equal(accessToken)
        done()
      })
    })

    it("should fetch and resolve a new token if the current token is expired", done => {
      const accessToken = mockToken()
      mockTokenRequest(accessToken)

      const authClient = new CloudFoundryAuthClient()
      authClient._token = mockToken(Date.now() / 1000)

      authClient.accessToken().then(token => {
        expect(token).to.equal(accessToken)
        done()
      })
    })

    it("should resolve the current token if it is not expired", done => {
      const accessToken = mockToken()

      const authClient = new CloudFoundryAuthClient()
      authClient._token = accessToken

      authClient.accessToken().then(token => {
        expect(token).to.equal(accessToken)
        done()
      })
    })
  })
})

const mockToken = (expiration = Date.now() / 1000 + 600) => {
  return jwt.sign({ exp: expiration }, "123abc")
}

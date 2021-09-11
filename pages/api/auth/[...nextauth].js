import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Conofi',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address) 
        // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/conofi`, {
        const res = await fetch(`${process.env.NEXTAUTHDJANGO_URL}/api/users/login/`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        // If no error and we have data data, return it
        if (res.ok && data) {
          let newUser = {}
          newUser.name = `${data?.user.first_name} ${data?.user.last_name}`
          newUser.email = data?.user.email
          newUser.accessToken = data?.access_token
          newUser.groups = data?.user?.groups

          return newUser
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  },
  theme: 'light',
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // Add access_token to the token right after signin
      token.accessToken = user?.accessToken
      return token
    },
    async session(session, token) {
      // Add property to session, like an access_token from a provider.
      session.user.name = token?.name
      session.accessToken = token?.accessToken
      session.groups = token?.groups
      return session
    },
    async redirect(url, baseUrl) {
      return `${baseUrl}/documentsSent`
    }
  }

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
})
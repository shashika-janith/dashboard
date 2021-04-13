const RouteRegistry = {
  landing: {
    path: '/',
  },
  auth: {
    path: '/auth',
    subPaths: {
      signIn: {
        path: '/signin'
      },
      signUp: {
        path: '/signup'
      }
    }
  }
}

export default RouteRegistry;
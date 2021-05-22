const RouteRegistry = {
  landing: {
    path: '/',
  },
  app: {
    path: '/app',
  },
  user: {
    path: '/user',
    subPaths: {
      signIn: {
        path: '/signin'
      },
      signUp: {
        path: '/signup'
      }
    }
  },
  error: {
    path: '/error',
  }
}

export default RouteRegistry;
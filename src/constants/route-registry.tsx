const RouteRegistry = {
  landing: {
    path: '/',
  },
  app: {
    path: '/app',
    subPaths: {
      personnelManagement: {
        path: '/pm',
        subPaths: {
          employees: {
            path: '/employees'
          }
        }
      }
    }
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
type ServerEnv = 'develop' | 'production'

export const PROJECT_ENV = process.env.REACT_APP_SERVER_ENV as ServerEnv

export const isProdEnv = PROJECT_ENV === 'production'

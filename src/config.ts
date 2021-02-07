type ServerEnv = 'develop' | 'fat' | 'rc' | 'production'

export const PROJECT_ENV = process.env.REACT_APP_SERVER_ENV as ServerEnv

export const isProdEnv = PROJECT_ENV === 'rc' || PROJECT_ENV === 'production'

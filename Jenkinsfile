pipeline {
  agent {
    docker {
      image 'node:lts'
      args '--network $DOCKER_NETWORK --volumes-from $MAVEN_CACHE'
    }
  }
  stages {
    stage('install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('build') {
      steps {
        sh 'yarn build'
      }
    }
    stage('storybook') {
      steps {
        sh 'yarn build-storybook'
      }
    }
    stage('test') {
      steps {
        sh 'yarn test'
      }
    }
  }
}

pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/manuel')
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
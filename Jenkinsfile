pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        build(job: 'build', propagate: true, wait: true, quietPeriod: 10)
      }
    }

  }
}
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'react-frontend-image'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    echo '📦 Installing React dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('frontend') {
                    echo '🛠️ Building React app...'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                echo '🐳 Building Docker image...'
                sh 'docker build -t $IMAGE_NAME ./frontend'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo '🚀 Running Docker container...'
                sh 'docker run -d -p 3000:3000 $IMAGE_NAME'
            }
        }
    }
}

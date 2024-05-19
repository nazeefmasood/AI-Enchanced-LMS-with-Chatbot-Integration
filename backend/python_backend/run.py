from flask import Flask, request
from flask_cors import CORS
from app.routes.admin_routes import admin_bp

config = {
    'ORIGINS': [
        'http://localhost:3001',  # React
        'http://localhost:3000',  # React
    ],
}

# App

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)
app.register_blueprint(admin_bp)

if __name__ == '__main__':
    port = 3001
    app.run(debug=True, port=port)

from flask import Flask, request
from flask_cors import CORS
from app.routes.admin_routes import admin_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(admin_bp)

if __name__ == '__main__':
    port = 3001
    app.run(debug=True, port=port)

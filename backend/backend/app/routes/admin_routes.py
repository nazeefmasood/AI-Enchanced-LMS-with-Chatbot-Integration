from flask import Blueprint, request, jsonify
from app.database.firebase import firebase
from flask_cors import CORS, cross_origin
admin_bp = Blueprint('admin', __name__)
CORS(admin_bp, resources={r"/api/*": {"origins": "*"}})


def handle_login(data):
    
    return "Hell0", 200


@admin_bp.route('/api/admin/auth', methods=('GET', 'POST', 'PUT', 'DELETE'))
def login_admin():
    request_body = request.get_json()
    return handle_login(request_body)



from flask import Blueprint, request, jsonify
from app.database.firebase import database
from flask_cors import CORS, cross_origin
from app.controllers.admin_controller import admin_login, check_admin_id
import uuid
import datetime

admin_bp = Blueprint('admin', __name__)
CORS(admin_bp, resources={r"/api/*": {"origins": "*", }})


# def on_time(data):
#     uid = uuid.uuid4()
#
#     if 'email' not in data or 'password' not in data:
#         return jsonify({'error': 'Missing required fields'}), 400
#     email = data['email']
#     password = data['password']
#     print(email)
#     print(password)
#
#     admin_data = {
#         "admin_id": "vMAikQs7BHMTUd4Hr6dAoDgKQQJ3",
#         "email": "comsatsadmin@gmail.com",
#         "date_added": str(datetime.datetime.now()),  # Convert datetime to string
#         "role": "admin"
#     }
#
#
#     try:
#         data = database.child("users").child("admin").child(str(uid)).set(admin_data)
#         print("Admin data added successfully:", data)
#         return data, 200  # Return success response with HTTP status code 200
#     except Exception as e:
#         print("Error:", e)
#         return "Error", 500  # Return error response with HTTP status code 500


@admin_bp.route('/api/admin/auth', methods=('GET', 'POST', 'PUT', 'DELETE'))
def login_admin():
    request_body = request.get_json()
    return admin_login(request_body)


@admin_bp.route('/api/admin/verify_id', methods={'GET', 'POST'})
def verify_id():
    request_body = request.get_json()
    return check_admin_id(request_body)


@admin_bp.route('/api/admin/add_teacher', methods={'GET', 'POST'})
def add_teacher():
    request_body = request.get_json()
    print(request_body)
    return {'message': "Hello"}

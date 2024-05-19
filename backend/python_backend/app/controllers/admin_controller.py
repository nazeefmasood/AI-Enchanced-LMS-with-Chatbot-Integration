import json
from datetime import time

from flask import jsonify, make_response, request
from app.controllers.login_controller import handle_login
from app.database.firebase import auth, database
import jwt

access_key = "ae90cd0f8dbf44af6dd073ae71276aea072da9bb657f0b313bc48292541d098d4a556cfd9e58e0bc38b34b2ce8a216c1cfd1"
refresh_key = "88f911a9e213fd50a70ce453368f6ea29faf964d37c3b862dsd5379768c173d1943480422bfa8e035b79f7c18a38"


def generate_refresh_token(data):
    encoded = jwt.encode(data, {"exp": 86400}, refresh_key, algorithm="HS256", )
    return encoded


def generate_access_token(data):
    encoded = jwt.encode(data, {"exp": 1}, access_key, algorithm="HS256")
    return encoded


def check_admin_id(admin_id):
    try:
        all_admins = database.child('users').child('admin').get().val()
        for admin_item, admin in all_admins.items():
            if admin.get('admin_id') == admin_id:
                return {'role': 'admin', 'is_admin': True, 'id': admin_item}
            return {'role': admin.get('role'), 'is_admin': False}

    except Exception as e:
        print("Error:", e)
        return {'role': "", 'is_admin': False}, 404


def save_refresh_token(user_id, token):
    try:
        database.child('users').child('admin').child(user_id).update({'refresh_token': token})
        return {'token_added': True}
    except Exception as err:
        print("Error while saving refresh token: ", err)
        return {'err': 'Error while saving refresh token', 'token_added': False}


def admin_login(data):
    try:
        user = handle_login(data)
        # Extract tokens from the user object
        user_id = user['localId']
        email = user['email']
        access_token = user['idToken']
        refresh_token = user['refreshToken']
        # _____________STEP 2____________
        is_admin = check_admin_id(user_id)
        print(is_admin)
        if is_admin['is_admin']:
            token_payload = {'email': email, 'uid': user_id}
            token_added = save_refresh_token(is_admin['id'], refresh_token)
            if token_added['token_added']:
                response_json = {'access_token': access_token, 'uid': user_id, 'email': email, 'is_admin': is_admin}
                response = make_response(jsonify(response_json), 200)
                response.set_cookie('refresh_token', refresh_token, httponly=True, max_age=86400)
                return response
            else:
                make_response(jsonify({'message': "Error while saving refresh token, Please Try again! "})), 404
        else:
            make_response(
                jsonify({'message': "Error you are not authorized to access this page ", 'is_admin': False})), 404
        # Create a response object

        # Set the refresh token as an HTTP-only cookie

    except Exception as e:
        return jsonify({'message': "Error at Admin Login Backend", 'error': e}), 404

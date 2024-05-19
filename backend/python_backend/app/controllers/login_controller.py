from flask import jsonify, make_response

from app.database.firebase import auth, database


# FIRST VERSION
# def handle_login(data):
#     if 'email' not in data or 'password' not in data:
#         return jsonify({'error': 'Missing required fields'}), 400
#     email = data['email']
#     password = data['password']
#     print(email)
#     print(password)
#     try:
#         user = auth.sign_in_with_email_and_password(email, password)
#         return user, 200
#     except Exception as error:
#         print("Error at Login Controller Backend: ", error)
#         return f"Invalid Password or Email {error}", 404


# STEPS
#   1, Verify Credentials
#   2. Check for the admin role against the localId
#   3. If valid allow user to log in otherwise don't
#   4. Pass the refresh token as the cookie http-only
#   5. Pass the access token to check if the user is valid or not
def handle_login(data):
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    email = data['email']
    password = data['password']
    try:
        # _____________STEP 1____________
        user = auth.sign_in_with_email_and_password(email, password)
        return user

    except Exception as error:
        print("Error at Login Controller Backend: ", error)
        return jsonify({'error': f"Invalid Password or Email {error}"}), 404

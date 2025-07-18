from dbserver.resource_decorator import *
from service_handler.service_handler_imports import *


# Method 2 - To make API Calls
class Foo(Resource):

    @staticmethod
    def post():
        return {"msg":"inside foo post "}


''' 
In Login class, the Resource parameter is used to provide a structured way to handle HTTP methods such as GET, POST, 
PUT, DELETE. Resource is a base class that Flask-RESTful extend.
'''
class Login(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = AuthHandler()
        return obj.login(payload)


class Register(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = AuthHandler()
        return obj.register(payload)


class GetUserDetails(Resource):

    @staticmethod
    def get():
        user_id = request.args["user_id"]
        # print('user_name', request.args["user_name"])
        obj = UserHandler()
        return obj.get_user_details(user_id)


class UpdateUserDetails(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = UserHandler()
        return obj.update_user_details(payload)


class CreateQr(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = QrHandler()
        return obj.create_qr(payload)


class UpdateQr(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = QrHandler()
        return obj.update_qr(payload)


class RemoveQr(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = QrHandler()
        return obj.remove_qr(payload)


class GetAllQr(Resource):

    @staticmethod
    def get():
        # payload = request.args
        user_id = request.args["user_id"]
        obj = QrHandler()
        return obj.get_all_qr(user_id)

class RemoveAllQr(Resource):

    @staticmethod
    def post():
        pass
        # Need to update remove_all_qr function if need to used this API
        payload = request.get_json()
        obj = QrHandler()
        return obj.remove_all_qr(payload)


class CreateShortUrl(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = UrlHandler()
        return obj.create_short_url(payload)


class RedirectShortUrl(Resource):

    # Cannot use request.args["hash_value"] here as it is used when parameters are passed via the query string Ex: GET /endpoint?user_id=123
    # Whereas here parameters are passed as part of the route. Ex: GET /endpoint/hash_value OR GET /endpoint/SFNk
    @staticmethod
    def get(hash_value):
        obj = UrlHandler()
        return obj.redirect_to_long_url(hash_value)


class GetCaptchaCode(Resource):
    @staticmethod
    def get():
        obj = CaptchaHandler()
        return obj.get_captcha_code()


class ValidateCaptchaCode(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = CaptchaHandler()
        return obj.validate_captcha_code(payload)


class ContactUs(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = EmailHandler()
        return obj.send_email(payload)


class LoginOAuth(Resource):

    @staticmethod
    def get():
        obj = AuthHandler()
        return obj.oauth_login()


class OAuth2Callback(Resource):

    @staticmethod
    def get():
        obj = AuthHandler()
        return obj.oauth_callback()


class UpdateUserPassword(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = UserHandler()
        return obj.update_password(payload)


class RemoveUserAccount(Resource):

    @staticmethod
    def post():
        payload = request.get_json()
        obj = UserHandler()
        return obj.remove_user(payload)
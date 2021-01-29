from aiohttp import web
import base64
from cryptography import fernet
from aiohttp_session.cookie_storage import EncryptedCookieStorage
from aiohttp_session import setup, session_middleware

fernet_key = fernet.Fernet.generate_key()
secret_key = base64.urlsafe_b64decode(fernet_key)


app = web.Application( 
    middlewares=[
        session_middleware(EncryptedCookieStorage(secret_key)),
])

web.run_app(app)
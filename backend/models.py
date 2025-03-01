from database import db

from database import db
import hashlib

class Auth(db.Model):
    email = db.Column(db.String(100), primary_key=True, unique=True, nullable=False)
    phone = db.Column(db.String(20), primary_key=True, unique=True, nullable=False)
    password_hash = db.Column(db.String(64), nullable=False)  # 存储 SHA-256 加密密码

    def __init__(self, email, phone, password):
        self.email = email
        self.phone = phone
        self.password_hash = self.hash_password(password)  # 存储哈希密码

    @staticmethod
    def hash_password(password):
        return hashlib.sha256(password.encode()).hexdigest()

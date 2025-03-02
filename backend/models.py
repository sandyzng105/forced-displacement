from database import db
import hashlib

class Auth(db.Model):
    email = db.Column(db.String(100), primary_key=True, unique=True, nullable=False)
    phone = db.Column(db.String(20), primary_key=False, unique=True, nullable=False)
    password_hash = db.Column(db.String(64), nullable=False)  # sotre SHA-256 encrypted passcode

    def __init__(self, email, phone, password):
        self.email = email
        self.phone = phone
        self.password_hash = self.hash_password(password)  # store has password

    @staticmethod
    def hash_password(password):
        return hashlib.sha256(password.encode()).hexdigest() 

from database import db
import hashlib

class Auth(db.Model):
    email = db.Column(db.String(100), primary_key=True, unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=False, nullable=False)
    password_hash = db.Column(db.String(64), nullable=False)  # Store SHA-256 encrypted passcode

    def __init__(self, email, phone, password):
        self.email = email
        self.phone = phone
        self.password_hash = self.hash_password(password)

    @staticmethod
    def hash_password(password):
        return hashlib.sha256(password.encode()).hexdigest()
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False)  # 'volunteer' or 'org'

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    org_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.String(50), nullable=False)
    signups = db.relationship('Signup', backref='event', lazy=True)

class Signup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)

    


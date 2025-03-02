from flask import Flask
from flask_migrate import Migrate
from config import Config
from database import db, bcrypt, jwt, cors 
from models import User, Event, Signup 
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from routes.auth import auth_bp
from routes.event import event_bp
from routes.signup import signup_bp
import os

# create Flask `app`
app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
bcrypt.init_app(app)
jwt.init_app(app)
cors.init_app(app)


app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(event_bp, url_prefix='/event')
app.register_blueprint(signup_bp, url_prefix='/signup')


with app.app_context():
    db.create_all()  

@app.route('/')
def home():
    return "Welcome to the Volunteer Platform API! Try /auth/register or /event/events"

 
if __name__ == '__main__':
    app.run(debug=True)
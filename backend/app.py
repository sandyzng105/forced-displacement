from flask import Flask
from flask_migrate import Migrate
from database import db  
from models import Auth  
import os

# create Flask `app`
app = Flask(__name__)
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{BASE_DIR}/auth.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()  

@app.route('/')
def home():
    return "Hello, Flask!"
 
if __name__ == '__main__':
    app.run(debug=True)
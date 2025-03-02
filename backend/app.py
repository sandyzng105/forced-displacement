from flask import Flask
from flask_migrate import Migrate
from database import db  
from models import Auth  

# create Flask `app`
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///auth.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return "Hello, Flask!"
 
if __name__ == '__main__':
    app.run(debug=True)

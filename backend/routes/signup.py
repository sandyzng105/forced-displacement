from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from database import db
from models import Signup, Event, User

signup_bp = Blueprint('signup', __name__)

@signup_bp.route('/sign_up_event/<int:event_id>', methods=['POST'])
@jwt_required()
def sign_up_event(event_id):
    user = get_jwt_identity()
    if user["role"] != "volunteer":
        return jsonify({"message": "Only volunteers can sign up"}), 403

    signup = Signup(user_id=user["id"], event_id=event_id)
    db.session.add(signup)
    db.session.commit()
    return jsonify({"message": "Signed up for event"}), 201

@signup_bp.route('/event_signups/<int:event_id>', methods=['GET'])
@jwt_required()
def event_signups(event_id):
    user = get_jwt_identity()
    event = Event.query.get(event_id)
    if not event or event.org_id != user["id"]:
        return jsonify({"message": "Unauthorized"}), 403

    signups = Signup.query.filter_by(event_id=event_id).all()
    volunteer_ids = [s.user_id for s in signups]
    volunteers = User.query.filter(User.id.in_(volunteer_ids)).all()
    return jsonify([{"id": v.id, "username": v.username} for v in volunteers])

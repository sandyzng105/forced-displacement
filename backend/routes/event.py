from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from database import db
from models import Event

event_bp = Blueprint('event', __name__)

@event_bp.route('/create_event', methods=['POST'])
@jwt_required()
def create_event():
    user = get_jwt_identity()
    if user["role"] != "org":
        return jsonify({"message": "Only orgs can create events"}), 403

    data = request.get_json()
    new_event = Event(org_id=user["id"], title=data["title"], description=data["description"], date=data["date"])
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Event created"}), 201

@event_bp.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([{"id": e.id, "title": e.title, "description": e.description, "date": e.date} for e in events])

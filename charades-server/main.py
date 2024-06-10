from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO, emit, send, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")


# Websocket
@socketio.on("connect")
def connected():
    send("Connected")


@socketio.on("message")
def handle_message(data):
    print("data from the frontend: ", str(data))
    emit("data", data, broadcast=True)


@socketio.on("disconnect")
def disconnected():
    print("user disconnected")
    emit("disconnect", {"data": "User disconnected"}, broadcast=True)


@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', to=room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)


# @app.route('/', methods=['GET', 'POST'])
# def welcome():
#     return "Hello World!"


if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000, use_reloader=True)

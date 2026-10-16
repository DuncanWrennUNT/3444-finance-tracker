from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("public/home.html")


@app.route("/login")
def login():
    return "<h1>Login page coming next.</h1>"


@app.route("/register")
def register():
    return "<h1>Register page coming next.</h1>"


if __name__ == "__main__":
    app.run(debug=True)
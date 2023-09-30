from flask import Flask, request, jsonify
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import os

app = Flask(__name__)

# Determine the directory path of the current script
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "all_food.csv")

# Load the data
data = pd.read_csv(DATA_PATH)
features = data.drop(columns=['Name of Food'])


@app.route('/recommend', methods=['POST'])
def recommend():
    user_profiles = request.json['profiles']

    # Convert the profiles into a format matching the dataset
    user_vector = [
        1 if profile in user_profiles else 0 for profile in data.columns[1:]]

    # Compute similarity with all items in the dataset
    cosine_sim = cosine_similarity([user_vector], features)

    # Get indices of top 5 most similar items
    recommended_indices = cosine_sim[0].argsort()[-5:][::-1]

    # Fetch the names of these items
    recommendations = data['Name of Food'].iloc[recommended_indices].tolist()
    return jsonify(recommendations)


if __name__ == "__main__":
    app.run(debug=True)
q

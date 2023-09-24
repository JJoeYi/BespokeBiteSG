import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load data
df = pd.read_csv('./all_food.csv')

df_encoded = pd.get_dummies(df, columns=['Nationality'])

print(df_encoded.columns)


# Sample user preferences
# This could be a list where each element corresponds to a preference for a column in the CSV.
Nationality = [0, 0, 1]  # Chinese, Indian, Malay
Spicy = 1
Savory = 1
Sweet = 0
Sour = 0
Bitter = 0
Meat = 1
Seafood = 0
Rice = 0
Noodles = 0
Dessert = 0
Snacks = 1
user_preferences = [Spicy, Savory, Sweet, Sour, Bitter, Meat,
                    Seafood, Rice, Noodles, Dessert, Snacks] + Nationality  # Fill based on user input

print(user_preferences)
# Compute cosine similarity between user preferences and dishes
cosine_sim = cosine_similarity(
    [user_preferences], df_encoded.drop('Name of Food', axis=1))
similarity_scores = cosine_sim[0]

print(df['Name of Food'][similarity_scores.argsort()][:][::-1])


# Get top 3 recommended dishes
top_dishes = df['Name of Food'][similarity_scores.argsort()[-3:][::-1]]

# print(top_dishes)

from dotenv import load_dotenv
import os
import requests

# Add API key to URL
load_dotenv(override=True)
api_key = os.getenv("API_KEY")
api_url = os.getenv("API_URL")
match_url = os.getenv("MATCH_URL")
api_url = api_url + "?api_key=" + api_key
match_url = match_url + "&api_key=" + api_key

def print_basics():
    print(f"[ Your Summoner Name is: {name} and you are Level {level} ]")
    print(f"Last Match Code: {matches[0]}")
    print()
    print("Welcome to League Analysis!")
    print()


# Set Up Request
try:
    response = requests.get(api_url, params={"api_key": api_key})
    print(f"Successfully Requested User Information. Status Code {response.status_code}")
    player_information = response.json()
except Exception as e:
    print(f"Error: Unable to access User API. Error Code {e}")

try:
    response = requests.get(match_url, params={"api_key": api_key})
    print(f"Successfully Requested Match Information. Status Code {response.status_code}")
    match_information = response.json()
except Exception as e:
    print(f"Error: Unable to access Match API. Error Code {e}")
    
name = player_information["name"]
puuid = player_information["puuid"]
level = player_information["summonerLevel"]

# Get Match History and Store in List by APpending
matches = []
for match in match_information:
    matches.append(match)


# Print Out Information
print_basics()

try:
    input_str = input("Which Match Would You Like to Analyze? (Enter a Number 1-20) ")
    input_int = int(input_str)
    if input_int > 20 or input_int < 1:
        raise ValueError("Invalid Input")
except ValueError as e:
    print(f"Error: {e}")

print(f"[ Your Summoner Name is: {name} and you are Level {level} ]")
print(f"Last Match Code: {matches[0]}")
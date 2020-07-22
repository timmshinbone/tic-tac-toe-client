curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --header "Authorization: Bearer ${TOKEN}" \
  --include \
  --request GET \
  --data '{}'
echo

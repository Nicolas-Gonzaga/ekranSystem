import requests


url = "https://api.pipefy.com/graphql"


payload = {"query": "mutation{createCard(input:{ pipe_id: \"302731204\" fields_attributes:[{field_id: \"nome_do_colaborador\", field_value: \"Latam Entertainment\"}{field_id: \"cargo\", field_value: \"Alerta Identificado na CPU do Totem 1\"}{field_id: \"m_tricas\", field_value: \"Alerta - 85%\"}]}){clientMutationId card {id title}}}"}
headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNDc5MDEsImVtYWlsIjoiZWtyYW4uY29udGF0b0BnbWFpbC5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjAyMTU3fX0.VGdCGMvgQ2bYrUL_YKLK7zO99GBuEcVR9ADkNOjcuiFqh7KgjfsrLqEj86kbg0SgJMZ-J0smfL7Qepn0NltFCg",
    "Content-Type": "application/json"
}


response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)

# Modèle Conceptuel des Données

*Format MOCODO*

```
catégorie : code catégorie, nom
appartient, 0N quiz, 0N catégorie
niveau: code niveau, nom
:

créé, 0N utilisateur, 11 quiz
quiz: code quiz, titre, description
défini, 0N niveau, 11 question
:

utilisateur: code utilisateur, prénom, nom, email, mot de passe
compose, 11 question, 0N quiz
question: code question, description, anecdote, wiki
valide, 11 question, 01 réponse

:
:
possède, 0N question, 11 réponse
réponse: code réponse, description
```

# Modèle Logique de Données

niveau (id, nom)
question (id, description, anecdote, wiki, #id_niveau, #id_quiz, #id_reponse)
reponse(id, description, #id_question)
tag(id, nom)
quiz (id, titre, description, #id_user)
utilisateur(id, prénom, nom, email, mot de passe)
quiz_has_tag(id, #id_quiz, #tag_id)

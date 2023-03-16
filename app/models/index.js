const Quiz = require('./quiz');
const Level = require('./level');
const Question = require('./question');
const Tag = require('./tag');
const User = require('./user');
const Answer = require('./answer');

// Quiz <-> User (One to many)
User.hasMany(Quiz, {
    foreignKey: "user_id", 
    as: "quizzes"
});

Quiz.belongsTo(User, {
    foreignKey: "user_id",
    as: "author"
});

// Quiz <-> Tag (Many to many)
Quiz.belongsToMany(Tag, {
    as: "tags",
    through: "quiz_has_tag", 
    otherKey: "tag_id" 
});

Tag.belongsToMany(Quiz, {
    as: "quizzes",
    through: "quiz_has_tag",
    foreignKey: "tag_id",
    otherKey: "quiz_id"
})


// EXERCICE : créer les liaisons entre les tables quiz et question + créer un test
// Quiz <-> Question (One to many) 

Quiz.hasMany(Question, {
    as: "questions",
    foreignKey: "quiz_id"
});

Question.belongsTo(Quiz, {
    as: "quiz",
    foreignKey: "quiz_id"
});


// Level <-> Question (One to many)
Level.hasMany(Question, {
    foreignKey: "level_id",
    as: "level" 
});

Question.belongsTo(Level, {
    foreignKey: "level_id",
    as: "level"
});

// réponses générales : 
// Question <-> Answer (One to Many)
Question.hasMany(Answer, {
    as: "answers",
    foreignKey: "question_id"
});

Answer.belongsTo(Question, {
    as: "question",
    foreignKey: "question_id"
});

// LA bonne réponse
// Question <-> Answer (One to One)
Question.belongsTo(Answer, {
    as: "goodAnswer",
    foreignKey: "answer_id"
});

module.exports = { Level, Question, Quiz, User, Tag, Answer };
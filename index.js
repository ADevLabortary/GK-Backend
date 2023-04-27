import express from 'express'
const app = express();
import {
  HistoryQuestions,
  GeographyQuestions,
  ScienceNatureQuestions,
  LiteratureQuestions,
  ArtsAndEntertainmentQuestions,
  CurrentAffairQuestions,
  TechnologyQuestions,
  MythologyQuestions,
  LanguageQuestions,
  ReligionPhilosophyQuestions,
  FamousPeopleQuestions,
} from "./questions.js";

const questionsByCategory = {
  History: HistoryQuestions,
  Geography: GeographyQuestions,
  "Science and Nature": ScienceNatureQuestions,
  Literature: LiteratureQuestions,
  "Arts and Entertainment": ArtsAndEntertainmentQuestions,
  "Current Affairs and Politics": CurrentAffairQuestions,
  "Technology and Innovation": TechnologyQuestions,
  "Mythology and Folklore": MythologyQuestions,
  "Language and Linguistics": LanguageQuestions,
  "Religion and Philosophy": ReligionPhilosophyQuestions,
  "Famous People and Personalities": FamousPeopleQuestions,
};

const getQuestionByCategory = (category) => {
  return questionsByCategory[category];
};

// Middlewares here 
app.use(express.json());


app.post("/test/category", (req, res) => {
  const { category } = req.body;
  const questions = getQuestionByCategory(category);
  res.json({ questions });
  console.log(questions);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

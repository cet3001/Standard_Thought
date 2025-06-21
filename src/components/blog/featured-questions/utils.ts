
import { questionPool } from "./question-data";

export const getFeaturedQuestions = (currentRotation: number) => {
  const featuredQuestions = questionPool.slice(currentRotation, currentRotation + 3);
  if (featuredQuestions.length < 3) {
    featuredQuestions.push(...questionPool.slice(0, 3 - featuredQuestions.length));
  }
  return featuredQuestions;
};

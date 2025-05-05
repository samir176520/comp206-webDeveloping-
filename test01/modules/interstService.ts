import { Interest } from "../types";

const interests: Interest[] = [];

export const addInterest = (interest: Interest) => interests.push(interest);

export const getInterestsByUserId = (userId: number) =>
  interests.filter((i) => i.userId === userId);
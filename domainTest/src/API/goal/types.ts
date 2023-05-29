import { Goal } from "../../types/goal";

// API params
export type CreateGoalParams = null;

export type GetGoalParams = { 
  id: string 
};

export type GetGoalsParams = null;

export type EditGoalParams = {
  id: string
};

export type DeleteGoalParams = null;


// API inputs
export type CreateGoalInput = {
  goal: Goal,
  createdOn: string
  updatedOn: string
}

export type GetGoalInput = null;

export type EditGoalInput = {
  name: string,
  targetDate: Date,
  udpatedOn: string
}

export type DeleteGoalInput = {
  id: number
}

export type GetGoalsInput = null


// API outputs 
export type CreateGoalOutput = null

export type GetGoalOutput = Goal

export type EditGoalOutput = null

export type DeleteGoalOutput = null

export type GetGoalsOutput = {
  goals: Goal[]
}

import { useGetGoal, useGetGoals, useCreateGoal } from "./requests";

export const useGoalApi = () => {
  // Use hooks for all APIs, get their state variables and data 
  const {
    getGoal,
    isLoading: getGoalLoading,
    data: getGoalData
  } = useGetGoal();

  const {
    getGoals,
    isLoading: getGoalsLoading,
    data: getGoalsData
  } = useGetGoals();

  const {
    createGoal,
    isLoading: createGoalLoading,
    data: createGoalData
  } = useCreateGoal();

  // Return them IN THE SAME ORDER as that of calling them. 
  return {
    getGoal: {
      query: getGoal,
      isLoading: getGoalLoading,
      data: getGoalData
    },
    getGoals: {
      query: getGoals,
      isLoading: getGoalsLoading,
      data: getGoalsData
    },
    createGoal: {
      mutation: createGoal,
      isLoading: createGoalLoading,
      data: createGoalData
    }
  }
}
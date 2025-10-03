import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completeDates: string[];
  createdAt: string;
}
interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
}
const useHabitStore = create<HabitState>()((set) => {
  return {
    habits: [],
    addHabit: (name, frequency) =>
      set((state) => {
        return {
          habits: [...state.habits,
            {
              id: Date.now().toString(),
              name,
              frequency,
              completeDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }),
  };
});

export default useHabitStore;

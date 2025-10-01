import { create } from "zustand";

export interface Habit{
    id:string;
    name:string;
    frequency:"daily"|"weekly";
    completeDates:string[];
    createdAt:string;
}
interface HabitState{
    habits:Habit[]
}
const useHabitStore=create<HabitState>()(()=>{
    return{
        habits:[],
    }
})

export default useHabitStore;
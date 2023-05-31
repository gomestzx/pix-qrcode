import { DataContext } from "@/context/DataContext";
import { useContext } from "react";


export function useData() {
    const ctx = useContext(DataContext)
    return ctx;
}
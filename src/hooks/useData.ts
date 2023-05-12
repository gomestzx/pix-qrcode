import { useContext } from "react";
import { DataContext } from "../context/DataContext";


export function useData() {
    const ctx = useContext(DataContext)
    return ctx;
}
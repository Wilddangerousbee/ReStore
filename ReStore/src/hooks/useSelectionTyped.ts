import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../store";

export const useSelectionType : TypedUseSelectorHook<RootType> = useSelector
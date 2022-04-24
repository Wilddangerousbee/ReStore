import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../store";

const useSelectionType : TypedUseSelectorHook<RootType> = useSelector

export default useSelectionType
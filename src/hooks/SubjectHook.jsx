import { useContext } from "react";
import { SubjectContext } from "../contexts/SubjectContext";
export default function useSubject() {
  return useContext(SubjectContext);
}

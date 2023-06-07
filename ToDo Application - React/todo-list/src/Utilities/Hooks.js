import { useState } from "react";

export function useGetToLocalStorage(key) {
    const [tasksList, setTasksList] = useState(() => {
      const savedTasks = localStorage.getItem(key);
      if (savedTasks) {
        return JSON.parse(savedTasks);
      } else {
        return [];
      }
    });
    return [tasksList, setTasksList];
  }
  
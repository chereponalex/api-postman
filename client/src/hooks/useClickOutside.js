import { useEffect } from "react";

export function useClickOutside(ref, callback) {
    useEffect(() => {
      const handleClickOutside = (event) => {
        const el = ref.current
        
        const path = event.path || (event.composedPath && event.composedPath())
        for (const pathEl of path) {
            // console.log(pathEl)
          if (pathEl === el) return
        }
        callback()
      }  
      
      document.addEventListener("mousedown", handleClickOutside)
      return () => {        
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
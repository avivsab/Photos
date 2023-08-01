import { useState, useEffect } from "react";

export default function useTextAnimator(text, delay = 150) {
  const [animateText, setAnimateText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        const updatedText = animateText + text[index];
        const updatedIndex = index + 1;
        setAnimateText(updatedText);
        setIndex(updatedIndex);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [index, animateText, text, delay]);

  return animateText;
}

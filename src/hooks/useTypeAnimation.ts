import { useState, useEffect, useCallback } from 'react';

export const useTypeAnimation = (
  words: string[],
  typingSpeed: number = 100,
  pauseDuration: number = 1500
) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index >= words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      setIsTyping(false);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      setIsTyping(true);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(words[index].substring(0, subIndex));
      setIsTyping(!reverse);
    }, reverse ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed]);

  useEffect(() => {
    if (subIndex === words[index].length && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, words, index, reverse, pauseDuration]);

  return { text, isTyping };
};
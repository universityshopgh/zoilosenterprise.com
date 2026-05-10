'use client'
import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(deps: any[] = []) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const elementsToUnobserve: Element[] = [];

    const setupObserver = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      if (elements.length === 0) return;

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.target) {
              entry.target.classList.add('visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      elements.forEach(el => {
        if (el) {
          observer?.observe(el);
          elementsToUnobserve.push(el);
        }
      });
    };

    const timeout = setTimeout(setupObserver, 150);

    return () => {
      clearTimeout(timeout);
      if (observer) {
        elementsToUnobserve.forEach(el => observer?.unobserve(el));
        observer.disconnect();
      }
    };
  }, [JSON.stringify(deps)])
}

export function useCounter(target: number, duration = 2000, start = false) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!start || !ref.current) return
    const el = ref.current
    const startTime = performance.now()
    const update = (time: number) => {
      const elapsed = Math.min((time - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - elapsed, 3)
      el.textContent = Math.floor(ease * target).toLocaleString()
      if (elapsed < 1) requestAnimationFrame(update)
      else el.textContent = target.toLocaleString()
    }
    requestAnimationFrame(update)
  }, [target, duration, start])
  return ref
}

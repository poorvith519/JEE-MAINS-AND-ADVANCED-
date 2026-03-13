/**
 * @file Countdown timer hook — calculates time remaining until JEE Main exam date.
 * Updates every second via setInterval.
 */
import { useState, useEffect } from "react";
import { STUDENT } from "@/data";
import type { CountdownTime } from "@/types";

export function useCountdown(): CountdownTime {
  const [diff, setDiff] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const target = STUDENT.examDate.getTime();
      const ms = Math.max(0, target - now);
      setDiff({
        days: Math.floor(ms / (1000 * 60 * 60 * 24)),
        hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((ms / (1000 * 60)) % 60),
        seconds: Math.floor((ms / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return diff;
}

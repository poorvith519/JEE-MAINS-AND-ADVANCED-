/**
 * @file Countdown timer widget — displays days, hours, minutes, seconds until JEE Main.
 * Updates every second. Uses tabular-nums for stable number widths.
 */
import { useCountdown } from "@/hooks";

export function CountdownWidget() {
  const countdown = useCountdown();

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      {[
        { value: countdown.days, label: "DAYS" },
        { value: countdown.hours, label: "HRS" },
        { value: countdown.minutes, label: "MIN" },
        { value: countdown.seconds, label: "SEC" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="font-mono text-2xl md:text-4xl font-bold text-gold tabular-nums">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="font-mono text-[8px] md:text-[10px] text-text-muted tracking-widest mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

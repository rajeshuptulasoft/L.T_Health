import React, { useEffect, useMemo, useRef, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export const BannerProgressAndCount = ({
  progress = 0.85,
  progressText = 85,
  progressSize = 100,
  progressThickness = 4,
  progressEmpty = "#ecf5fb",
  progressFill = "#1C58D5",
  countTo = 250,
  countSuffix = "K+",
  countDurationMs = 1500,
  showProgress = true,
  showCount = true,
}) => {
  const [count, setCount] = useState(0);
  const [p, setP] = useState(0);
  const startedRef = useRef(false);
  const rootRef = useRef(null);

  const circle = useMemo(() => {
    const r = Math.max(1, progressSize / 2 - progressThickness / 2);
    const c = 2 * Math.PI * r;
    return { r, c, viewBox: `0 0 ${progressSize} ${progressSize}` };
  }, [progressSize, progressThickness]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startAt = performance.now();
      const duration = Math.max(200, countDurationMs);

      const tick = (now) => {
        const raw = Math.min(1, (now - startAt) / duration);
        const eased = easeOutCubic(raw);

        setCount(Math.round(countTo * eased));
        setP(progress * eased);

        if (raw < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Start on load + when visible (template starts on appear)
    start();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [countTo, countDurationMs, progress]);

  const dashOffset = circle.c * (1 - Math.min(1, Math.max(0, p)));

  return (
    <>
      {showProgress && (
        <div className="banner-two__progress-inner" ref={rootRef}>
          <svg
            width={progressSize}
            height={progressSize}
            viewBox={circle.viewBox}
            style={{ transform: "rotate(72deg)" }}
            aria-hidden="true"
          >
            <circle
              cx={progressSize / 2}
              cy={progressSize / 2}
              r={circle.r}
              fill="none"
              stroke={progressEmpty}
              strokeWidth={progressThickness}
            />
            <circle
              cx={progressSize / 2}
              cy={progressSize / 2}
              r={circle.r}
              fill="none"
              stroke={progressFill}
              strokeWidth={progressThickness}
              strokeLinecap="square"
              strokeDasharray={circle.c}
              strokeDashoffset={dashOffset}
            />
          </svg>

          <div className="banner-two__pack count-box">
            <p className="count-text">{Math.round(progressText * p)}</p>
            <span>%</span>
          </div>
        </div>
      )}

      {showCount && (
        <div className="banner-two__patient-recovers-content" ref={!showProgress ? rootRef : undefined}>
          <div className="banner-two__patient-recovers-count-box">
            <p className="odometer">{count}</p>
            <span>{countSuffix}</span>
          </div>
          <p className="banner-two__patient-recovers-text">Patient recovers</p>
        </div>
      )}
    </>
  );
};


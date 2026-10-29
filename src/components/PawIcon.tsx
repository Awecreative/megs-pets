export default function PawIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--leaf)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="5.5" cy="10" r="2" />
      <circle cx="9.5" cy="5.5" r="2" />
      <circle cx="14.5" cy="5.5" r="2" />
      <circle cx="18.5" cy="10" r="2" />
      <path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.7 2.4 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.5 0 2.7-.8 2.7-2.4C17.5 15.2 15 12 12 12z" />
    </svg>
  );
}

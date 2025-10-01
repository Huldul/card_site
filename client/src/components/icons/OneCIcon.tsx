interface OneCIconProps {
  className?: string;
}

export default function OneCIcon({ className = "w-6 h-6" }: OneCIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="15" fill="currentColor" fillOpacity="0.1" />
      <text
        x="50"
        y="72"
        fontFamily="Arial, sans-serif"
        fontSize="56"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
      >
        1C
      </text>
    </svg>
  );
}

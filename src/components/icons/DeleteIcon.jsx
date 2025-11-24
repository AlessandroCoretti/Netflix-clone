export default function DeleteIcon({ size = 24, color = "white" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width={size} height={size}>
      <g fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round">
        <circle cx="7" cy="7" r="6.5" />
        <path d="M4 7h6" />
      </g>
    </svg>
  );
}

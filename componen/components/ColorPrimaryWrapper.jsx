import "../../style/Teslayoutfilm.css";

// Tombol "Mulai" untuk banner hero (pengganti komponen hasil export Anima)
export function ColorPrimaryWrapper({ buttonContent = "Mulai", className = "" }) {
  return (
    <button className={`color-primary-wrapper ${className}`}>
      {buttonContent}
    </button>
  );
}

export default ColorPrimaryWrapper;

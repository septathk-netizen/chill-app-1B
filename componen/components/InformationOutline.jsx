// Ikon outline "i" (information) untuk tombol Selengkapnya
export function InformationOutline({ className = "", informationOutline }) {
  return (
    <img
      className={className}
      alt=""
      src={informationOutline || "https://c.animaapp.com/FOeDvUsK/img/information-outline-1.svg"}
    />
  );
}

export default InformationOutline;

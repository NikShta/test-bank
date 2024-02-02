import {FooterProps} from "./types";

export const Footer: React.FC<FooterProps> = ({name}) => (
  <footer>
    <span>
      <strong>{name ?? "CURRENCY"}</strong>
    </span>
  </footer>
);

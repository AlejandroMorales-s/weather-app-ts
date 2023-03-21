type PropTypes = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

export default function PrimaryButton({
  text,
  type = "button",
  disabled = false,
}: PropTypes) {
  return (
    <button
      disabled={disabled}
      className={`${disabled && "primary-button-disabled"} primary-button`}
      type={type}
    >
      {text}
    </button>
  );
}

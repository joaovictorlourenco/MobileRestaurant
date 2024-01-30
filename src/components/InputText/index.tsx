import { Container } from "./styles";

type InputTextProps = {
  placeholder: string;
  placholderColor?: string;
  keyboardType?: "numeric" | "email-address" | "default";
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  color?: string;
};

export function InputText({
  placeholder,
  placholderColor,
  keyboardType,
  value,
  onChangeText,
  secureTextEntry,
  color,
}: InputTextProps) {
  return (
    <Container
      placeholder={placeholder}
      placeholderTextColor={placholderColor}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    ></Container>
  );
}

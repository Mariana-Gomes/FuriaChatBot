import { Option } from "../data/types";

export const findOptionFromText = (
  input: string,
  options?: Option[]
): Option | undefined => {
  if (!options) return;

  return options.find((option) =>
    option.text.toLowerCase().includes(input.trim().toLowerCase())
  );
};

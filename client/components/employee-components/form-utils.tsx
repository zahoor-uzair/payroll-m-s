interface Field {
  label: string;
  state: string;
  helper?: string;
  required?: boolean;
  type?: string;
  options?: FieldOption[];
}
interface FieldOption {
  value: string;
  label: string;
}

export const inputFields: Field[] = [
  {
    label: "Name",
    state: "name",
    helper: "Minimum 5 characters",
    required: true,
  },
  {
    label: "Father Name",
    state: "fname",
    helper: "Minimum 5 characters",
    required: true,
  },
  {
    label: "Email",
    state: "email",
    helper: "Must include @ and .com",
    required: true,
    type: "email",
  },
  {
    label: "Age",
    state: "age",
    required: true,
    type: "number",
  },
  {
    label: "Phone No.",
    state: "phoneNo",
    helper: "Start with country code e.g: +1 ",
    required: true,
  },
  {
    label: "Salary",
    state: "salary",
    required: true,
    type: "number",
  },
];

export const radioFields: Field[] = [
  {
    label: "Gender",
    state: "gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  {
    label: "Department",
    state: "department",
    options: [
      { value: "development", label: "Development" },
      { value: "operations", label: "Operations" },
    ],
  },
];

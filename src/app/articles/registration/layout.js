import { RegistrationLayout } from "@/components/layouts/RegisterationLayout";

export default function layout({ children }) {
  return (
    <div>
      <RegistrationLayout>{children}</RegistrationLayout>
    </div>
  );
}

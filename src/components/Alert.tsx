import { useContext } from "react";
import AlertContext from "@/context/alert/AlertContext";
import { Terminal } from "lucide-react";
import {
  Alert as UIAlert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const Alert: React.FC = () => {
  const { alert } = useContext(AlertContext) as {
    alert: { msg: string; type: string } | null;
  };

  return (
    alert !== null && (
      <UIAlert className="top-[100px] fixed right-[50px] z-[99999] w-[250px] drop-shadow-lg">
        <Terminal className="h-4 w-4" />
        {alert.type === "warning" ? (
          <AlertTitle className="text-red-800 font-bold">Error!</AlertTitle>
        ) : (
          <AlertTitle>Heads up!</AlertTitle>
        )}
        <AlertDescription>{alert.msg}</AlertDescription>
      </UIAlert>
    )
  );
};

export default Alert;
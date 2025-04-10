
import { toast } from "sonner";

export { toast };

// Nous n'utilisons plus le code personnalisé de toast
// mais exportons simplement le toast de sonner pour maintenir la compatibilité
export const useToast = () => {
  return {
    toast: toast
  };
};

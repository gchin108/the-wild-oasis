import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), //arguments passed from CreateCabinForm
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] }); //triggers refetching because invalidateQueries make data stale, since the stale time is set to 0, react-query will instantly refetch
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}

import { authKeys } from "@/lib/queryKeys";
import { signin } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: signin,
    onSuccess: async (user) => {
      //비로그인 상태인 쿼리는 null 이기 때문에 data로 받은 값으로
      //쿼리, 캐시를 직접 바꿔줘야됨
      await queryClient.cancelQueries({ queryKey: authKeys.me() });
      queryClient.setQueryData(authKeys.me(), user);
      router.push("/items");
    },
  });
  return { mutate, isPending, isSuccess };
}

import { authKeys } from "@/lib/queryKeys";
import { getMe, logout } from "@/services/authService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useMe() {
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: getMe,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  //useMutation을 쓰는 이유는 로그아웃 API Method 가 POST기 때문
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(authKeys.me(), null);
      queryClient.removeQueries({
        predicate: (q) => q.queryKey[0] !== authKeys.all[0],
      });
    }, //-> useMutation이 기본 제공하는 onSuccess, isPending
    //-> setQueryData(,): 1번째 인자의 캐시를 2번째 인자로 바꾸는 것
    //-> removeQueries(): 캐시 지우는 함수, predicate: 는 다음 조건에 맞는 쿼리, 캐시를 지우고 싶을때 쓴다.
  });
}

export const authKeys = {
  all: ["auth"],
  me: () => ["auth", "me"],
};

export const userKeys = {
  all: ["user"],
  me: () => [...userKeys.all, "me"],
};

export const itemKeys = {
  all: ["items"],
  lists: () => ["items", "list"],
  list: (params) => ["items", "list", params],
  detail: (id) => ["items", "detail", id],
};

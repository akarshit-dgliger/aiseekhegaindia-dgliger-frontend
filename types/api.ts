export interface UserPublic {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  createdAt: string;
}

export interface MeResponse {
  user: UserPublic;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
  };
}

export interface AppInfo {
  sidebar: SidebarInfo;
  device: string;
}

export interface SidebarInfo {
  opened: boolean;
  withoutAnimation: boolean;
}
export interface UserInfo {
  token:string;
  name:string;
  avatar:string;
  roles: string[];
}
export interface StateInfo {
  app : AppInfo;
  user: UserInfo;
}

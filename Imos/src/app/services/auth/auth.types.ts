export interface CurrentUser{
  userId: number,
  userRoleId:number;
  userrole:string;
  userName:string; 
  password:string;
  token:string;
  }

  export interface User{
    userName: string
    otp?: string
  }
  

  
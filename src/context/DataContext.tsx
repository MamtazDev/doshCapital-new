import { ReactNode, createContext, useState } from "react";

export const DataContext = createContext<any>(null);

interface IUser {
  name: string;
  email: string;
  userId: string;
  accessToken: string;
}

function DataProvider({ children }: { children: ReactNode }): JSX.Element {
  const [productDatas, setProductDatas] = useState(null);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [selectedUser, setSelectedUser] = useState<number>(20);

  const info = {
    productDatas,
    setProductDatas,
    setUserInfo,
    userInfo,
    selectedUser,
    setSelectedUser,
  };

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
}

export default DataProvider;

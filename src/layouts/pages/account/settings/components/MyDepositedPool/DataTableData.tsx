import DefaultCell from "layouts/dashboards/sales/components/DefaultCell";
import ProductCell from "layouts/dashboards/sales/components/ProductCell";
import nikeV22 from "assets/images/ecommerce/blue-shoe.jpeg";
import { TextAlign } from "./types"; 

const dataTableData = {
  columns: [
    { Header: "Pool Name", accessor: "PoolName", width: "100%",align: "center" as TextAlign, },
    { Header: "Initial Deposit", accessor: "InitialDeposit" },
    { Header: "Pool Value",accessor: "PoolValue",align: "center" as TextAlign,},
    { Header: "Pool Balance", accessor: "PoolBalance",align: "center" as TextAlign,},
  ],

  rows: [
    {
        PoolName: (
            <ProductCell image={nikeV22} name="DOSH-100" orders={20} />
          ),
      InitialDeposit: <DefaultCell>$375</DefaultCell>,
      PoolValue: <DefaultCell>$7500</DefaultCell>,
      PoolBalance: <DefaultCell>$7500</DefaultCell>,
     
    },
  ],
};

export default dataTableData;